#!/usr/bin/env bash
# ============================================================
# 本地 Halo 预览站一键脚本
# 用法：
#   ./preview.sh         启动预览站（等效 start）
#   ./preview.sh start   启动预览站
#   ./preview.sh stop    停止预览站
#   ./preview.sh logs    查看实时日志
# ============================================================
set -e
cd "$(dirname "$0")"

case "${1:-start}" in
  start|up|"")
    docker compose up -d
    echo ""
    echo "✅ 预览站已启动：http://localhost:8090"
    echo "   首次使用：完成管理员设置后，进入 主题 → 未安装 → 安装并启用 theme-aurora"
    echo "   详细步骤见 PREVIEW.md"
    ;;
  stop|down)
    docker compose down
    echo "✅ 预览站已停止"
    ;;
  logs)
    docker compose logs -f
    ;;
  *)
    echo "用法: ./preview.sh [start|stop|logs]"
    ;;
esac
