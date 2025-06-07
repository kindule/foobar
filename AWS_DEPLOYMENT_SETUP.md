# AWS S3 静态网站部署配置指南

## 1. 创建 S3 存储桶

### 在 AWS 控制台中：
1. 登录 AWS 控制台
2. 进入 S3 服务
3. 点击"创建存储桶"
4. 输入存储桶名称（建议使用域名，如：`your-domain.com`）
5. 选择 AWS 区域
6. **取消勾选"阻止所有公开访问"**
7. 点击"创建存储桶"

## 2. 配置静态网站托管

### 在存储桶中：
1. 选择您刚创建的存储桶
2. 进入"属性"选项卡
3. 滚动到"静态网站托管"部分
4. 点击"编辑"
5. 选择"启用"
6. 索引文档：`index.html`
7. 错误文档：`index.html`（SPA 应用）
8. 点击"保存更改"

## 3. 配置存储桶策略

### 添加公开读取权限：
1. 进入"权限"选项卡
2. 点击"存储桶策略"下的"编辑"
3. 添加以下策略（替换 `YOUR_BUCKET_NAME`）：

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
        }
    ]
}
```

## 4. 创建 IAM 用户用于部署

### 创建 IAM 用户：
1. 进入 IAM 服务
2. 点击"用户" → "创建用户"
3. 输入用户名（如：`github-actions-deploy`）
4. 选择"编程访问"
5. 点击"下一步"

### 添加权限：
1. 选择"直接附加现有策略"
2. 搜索并选择以下策略：
   - `AmazonS3FullAccess`（或创建更精确的自定义策略）
   - `CloudFrontFullAccess`（如果使用 CloudFront）

### 获取访问密钥：
1. 完成用户创建
2. 记录 **Access Key ID** 和 **Secret Access Key**
3. **重要：妥善保管这些密钥**

## 5. 在 GitHub 中配置 Secrets

### 在您的 GitHub 仓库中：
1. 进入 Settings → Secrets and variables → Actions
2. 点击"New repository secret"
3. 添加以下 secrets：

| Secret 名称 | 值 | 描述 |
|------------|-----|------|
| `AWS_ACCESS_KEY_ID` | 您的 Access Key ID | IAM 用户的访问密钥 ID |
| `AWS_SECRET_ACCESS_KEY` | 您的 Secret Access Key | IAM 用户的秘密访问密钥 |
| `AWS_REGION` | 例如：`us-east-1` | S3 存储桶所在的 AWS 区域 |
| `S3_BUCKET_NAME` | 您的存储桶名称 | S3 存储桶的名称 |
| `CLOUDFRONT_DISTRIBUTION_ID` | 分发 ID（可选） | 如果使用 CloudFront CDN |

## 6. 测试部署

### 推送代码触发部署：
1. 提交并推送代码到 main 分支
2. 查看 GitHub Actions 中的工作流程
3. 部署成功后，访问网站：
   - `http://YOUR_BUCKET_NAME.s3-website-REGION.amazonaws.com`

## 7. 可选：配置自定义域名

### 使用 CloudFront + 自定义域名：
1. 创建 CloudFront 分发
2. 设置源为您的 S3 存储桶
3. 配置 SSL 证书（AWS Certificate Manager）
4. 在域名 DNS 中设置 CNAME 记录

## 8. 成本估算

- S3 存储：约 $0.023/GB/月
- 数据传输：前 1GB 免费，之后约 $0.09/GB
- CloudFront（可选）：前 1TB 免费，之后约 $0.085/GB

## 故障排除

### 常见问题：
1. **403 错误**：检查存储桶策略和公开访问设置
2. **404 错误**：确保 index.html 在根目录
3. **部署失败**：检查 AWS 凭证和权限
4. **缓存问题**：使用 CloudFront 缓存失效

### 有用的 AWS CLI 命令：
```bash
# 查看存储桶内容
aws s3 ls s3://your-bucket-name

# 手动同步文件
aws s3 sync dist/ s3://your-bucket-name --delete

# 清除 CloudFront 缓存
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
``` 