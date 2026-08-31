# 本地预览站（实时查看主题改动）

用 Docker 在本机跑一个 Halo，把本主题源码直接挂载进去。
**改本地文件 → 浏览器刷新 → 实时看到效果**，和线上 zanecarter.top 完全同版本（Halo 2.20.21）。

---

## 一、前置条件

- 安装 [Docker Desktop](https://www.docker.com/products/docker-desktop/)（macOS 直接下载 dmg 安装，装完打开一次即可）
- 终端验证：`docker --version` 能输出版本号

## 二、启动预览站

在 `theme-kukuxin` 文件夹打开终端：

```bash
./preview.sh start
# 等效命令：docker compose up -d
```

首次拉取镜像需要几分钟（约 200MB）。启动后浏览器打开 **http://localhost:8090**。

## 三、首次初始化（只需一次）

1. 打开 http://localhost:8090，按引导**创建管理员账号**（用户名密码随便填，只用于本机预览）
2. 进入后台 → **主题** → 右上角「切换主题」→ 切到「**未安装**」页
3. 找到 **KukuXin（theme-kukuxin）** → 点击**安装** → 再点**启用**
4. 此时首页已经是本主题渲染的了

## 四、把预览站配成和线上一样（可选）

主题设置里，按你线上的值配置（**主题 → 主题设置 → 首页大图**）：

| 设置项 | 线上值 |
|--------|--------|
| 背景模式 `hero_bg_mode` | `video-reveal`（视频+双图擦除） |
| 大标题 | `Zane's Digital Lab` |
| 副标题 | `Welcome to Zane's Digital Lab...` |
| 遮罩透明度 `hero_overlay` | `0` |
| 前景图片 `hero_image_top` | 重新上传一张（线上 `/upload/...` 路径在本地不存在） |
| 底层图片 `hero_image_bottom` | 可选，不填则无 |

> 注意：线上设置存在你服务器数据库里，本地预览站是独立的 H2 数据库，
> 所以图片需要**重新上传一次**，其余照抄即可。

## 五、实时预览工作流 ⭐

```
1. 用编辑器修改 theme-kukuxin 里的文件（模板/CSS/JS/配置）
2. 浏览器切到 http://localhost:8090 刷新页面
3. 模板（templates/*.html）→ 普通刷新即可（已关闭模板缓存）
4. CSS/JS → 用 Cmd+Shift+R 强制刷新（绕过浏览器缓存）
5. 满意后：git add . && git commit && git push 同步到 GitHub
```

## 六、常用命令

```bash
./preview.sh stop     # 停止预览站
./preview.sh logs     # 查看实时日志（报错时用）
docker compose down   # 停止（同 stop）
```

## 七、常见问题

- **端口被占用**：把 `docker-compose.yml` 里的 `"8090:8090"` 改成 `"8091:8090"`，浏览器访问新端口
- **镜像拉取慢/失败**：把 `docker-compose.yml` 里的镜像换成国内源
  `registry.fit2cloud.com/halo/halo:2.20.21`
- **改模板不生效**：确认启动时带了 `SPRING_THYMELEAF_CACHE=false`（docker-compose.yml 里已有），改完等 1~2 秒再刷新
- **预览站数据**：存在 `halo-data/` 目录（已被 .gitignore 排除，不会上传 GitHub），删掉它可重置预览站
- **预览站不影响线上**：它是独立的数据库和端口，和 zanecarter.top 互不相干
