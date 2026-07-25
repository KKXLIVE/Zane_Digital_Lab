/**
 * Aurora i18n — 全局语言切换（中/英/日/韩）
 */
(function () {
  'use strict';

  // ===== 字典 =====
  const LOCALES = {
    'zh-CN': {
      name: '中文',
      short: '中',
      // layout
      'theme_switch': '主题切换',
      'menu_btn': '菜单',
      'leave_trace': '在时间里留下痕迹',
      'author_label': '作者',
      'powered_by': 'Powered by',
      'theme_label': 'Theme',
      'back_home': '← 返回首页',
      // index
      'articles_total': '共 {n} 篇文章',
      'prev_page': '← 上一页',
      'page_info': '第 {page} / {total} 页',
      'next_page': '下一页 →',
      // post
      'table_of_contents': '📖 目录',
      'tags_label': '标签：',
      'prev_post': '← 上一篇',
      'next_post': '下一篇 →',
      'no_tags': '暂无标签',
      'stats_views': '访问量',
      'stats_title': '📊 统计',
      'quick_links': '🔗 快捷链接',
      'archives_link': '文章归档',
      'tags_link': '标签云',
      'categories_link': '全部分类',
      'author_bio': '保持好奇，保持热爱',
      // tags
      'tags_badge': '标签云',
      'tags_title': '所有标签',
      'tags_count': '共 {n} 个标签',
      // categories
      'cat_badge': '分类',
      'cat_title': '全部分类',
      'cat_count': '共 {n} 个分类',
      // archives
      'archives_badge': '归档',
      'archives_title': '时间线',
      'archives_page': '第 {page} 页',
      'year_month': '{year} 年 {month} 月',
      // links
      'links_title': '友情链接',
      'links_total': '共 {n} 个友链',
      'links_loading': '加载中...',
      'links_empty': '暂无友情链接',
      'links_hint': '请在 Halo 后台安装并配置「Links」插件添加友链',
      'links_error': '友链加载失败，请稍后刷新页面重试',
      'links_group_desc': '分组描述',
      'links_my_info': '我的博客信息',
      'links_apply': '申请友链',
      'links_field_name': '站点名称',
      'links_field_url': '网址',
      'links_field_logo': 'Logo',
      'links_field_desc': '描述',
      'links_field_rss': 'RSS',
      'links_apply_hint': '欢迎与我交换友链！请在评论区留言你的博客信息：',
      'links_apply_note': '我会尽快审核并添加你的友链。',
      'links_comment': '评论区',
      // link submit
      'links_submit_title': '提交友链申请',
      'links_submit_desc': '填写你的网站信息，我会尽快审核',
      'links_submit_basic': '基本信息',
      'links_submit_url': '网站地址',
      'links_submit_autofill': '自动填充',
      'links_submit_url_hint': '输入网址后点击"自动填充"可自动获取网站信息',
      'links_submit_name': '网站名称',
      'links_submit_more_title': '更多选项',
      'links_submit_optional': '可选',
      'links_submit_linkpage': '友链页面',
      'links_submit_group': '申请分组',
      'links_submit_default_group': '默认分组',
      'links_submit_verify': '验证信息',
      'links_submit_email': '联系邮箱',
      'links_submit_email_hint': '用于接收审核结果通知',
      'links_submit_code': '邮箱验证码',
      'links_submit_send': '发送',
      'links_submit_captcha': '图形验证码',
      'links_submit_cancel': '取消',
      'links_submit_btn': '提交申请',
      'links_submit_online': '在线提交',
      'links_submit_unavailable': '友链自助服务不可用',
      'links_update_title': '修改友链信息',
      'links_update_desc': '请使用原友链邮箱验证身份',
      'links_update_find': '查找友链',
      'links_update_old_url': '原网站地址',
      'links_update_old_url_hint': '输入你当前已提交的友链地址',
      'links_update_new_info': '新网站信息',
      'links_update_email_hint': '必须与原友链邮箱一致',
      'links_update_btn': '确认修改',
      'links_update_online': '修改友链',
      // 404
      'e404_title': '页面未找到',
      'e404_desc': '你寻找的页面可能已被移除或地址已更改',
      'e404_btn_home': '返回首页',
      'e404_btn_archives': '看看归档',
      // date
      'date_format': 'yyyy年M月d日',
      'date_format_short': 'M.dd',
      // language switch
      'lang_switch': '语言切换',
      // photos
      'photos_title': '📷 图库',
      'photos_empty': '暂无照片',
      'photos_hint': '请安装并配置「图库」插件',
      // moments
      'moments_title': '💬 瞬间',
      'moments_empty': '暂无瞬间',
      'moments_hint': '请安装并配置「瞬间」插件',
      // docs
      'docs_title': '📚 文档',
      'docs_empty': '暂无文档项目',
      'docs_hint': '请安装并配置「文档」插件',
      // steam
      'steam_title': '🎮 Steam',
      // friends
      'friends_title': '👥 朋友圈',
      'friends_empty': '暂无动态',
      'friends_hint': '请安装并配置「朋友圈」插件',
      'friend_read_more': '阅读原文',
      'friends_count': '共 ',
      'friends_count_unit': ' 篇订阅',
      'friends_total': '共 {n} 篇订阅',
      // page templates
      'page_about': '关于',
      'page_projects': '项目展示',
      'page_links': '友链',
      'page_content': '留言板',
      'page_content_desc': '欢迎在此留言、交流与反馈',
      // moment detail
      'moment_back': '← 返回瞬间',
      'moment_detail_title': '瞬间详情',
      // comments
      'comments_title': '评论',
    },
    en: {
      name: 'English',
      short: 'EN',
      'theme_switch': 'Toggle theme',
      'menu_btn': 'Menu',
      'leave_trace': 'Leave traces in time',
      'author_label': 'Author',
      'powered_by': 'Powered by',
      'theme_label': 'Theme',
      'back_home': '← Back to Home',
      'articles_total': '{n} articles total',
      'prev_page': '← Prev',
      'page_info': 'Page {page} of {total}',
      'next_page': 'Next →',
      'table_of_contents': '📖 TOC',
      'tags_label': 'Tags: ',
      'prev_post': '← Previous',
      'next_post': 'Next →',
      'no_tags': 'No tags',
      'stats_views': 'Views',
      'stats_title': '📊 Statistics',
      'quick_links': '🔗 Quick Links',
      'archives_link': 'Archives',
      'tags_link': 'Tags',
      'categories_link': 'Categories',
      'author_bio': 'Stay curious, stay passionate',
      'tags_badge': 'Tags',
      'tags_title': 'All Tags',
      'tags_count': '{n} tags',
      'cat_badge': 'Categories',
      'cat_title': 'All Categories',
      'cat_count': '{n} categories',
      'archives_badge': 'Archives',
      'archives_title': 'Timeline',
      'archives_page': 'Page {page}',
      'year_month': '{month} {year}',
      'links_title': 'Friendship Links',
      'links_total': '{n} links',
      'links_loading': 'Loading...',
      'links_empty': 'No links yet',
      'links_hint': 'Install the "Links" plugin in Halo admin to add links',
      'links_error': 'Failed to load links, please refresh the page',
      'links_group_desc': 'Group description',
      'links_my_info': 'My Blog Info',
      'links_apply': 'Apply for Link',
      'links_field_name': 'Site Name',
      'links_field_url': 'URL',
      'links_field_logo': 'Logo',
      'links_field_desc': 'Description',
      'links_field_rss': 'RSS',
      'links_apply_hint': 'Welcome to exchange links! Please leave your blog info in the comments:',
      'links_apply_note': 'I will review and add your link as soon as possible.',
      'links_comment': 'Comments',
      'links_submit_title': 'Submit Link Application',
      'links_submit_desc': 'Fill in your website info and I will review it soon',
      'links_submit_basic': 'Basic Info',
      'links_submit_url': 'Website URL',
      'links_submit_autofill': 'Auto-fill',
      'links_submit_url_hint': 'Enter URL and click "Auto-fill" to fetch website info',
      'links_submit_name': 'Site Name',
      'links_submit_more_title': 'More Options',
      'links_submit_optional': 'Optional',
      'links_submit_linkpage': 'Link Page',
      'links_submit_group': 'Group',
      'links_submit_default_group': 'Default',
      'links_submit_verify': 'Verification',
      'links_submit_email': 'Email',
      'links_submit_email_hint': 'For receiving review notifications',
      'links_submit_code': 'Verification Code',
      'links_submit_send': 'Send',
      'links_submit_captcha': 'Captcha',
      'links_submit_cancel': 'Cancel',
      'links_submit_btn': 'Submit Application',
      'links_submit_online': 'Submit Online',
      'links_submit_unavailable': 'Link submission service unavailable',
      'links_update_title': 'Update Link Info',
      'links_update_desc': 'Please verify with your original email',
      'links_update_find': 'Find Link',
      'links_update_old_url': 'Original URL',
      'links_update_old_url_hint': 'Enter your current submitted link URL',
      'links_update_new_info': 'New Info',
      'links_update_email_hint': 'Must match the original email',
      'links_update_btn': 'Confirm Update',
      'links_update_online': 'Update Link',
      'e404_title': 'Page Not Found',
      'e404_desc': 'The page you are looking for may have been removed or moved.',
      'e404_btn_home': 'Back to Home',
      'e404_btn_archives': 'View Archives',
      'date_format': 'MMMM d, yyyy',
      'date_format_short': 'MM.dd',
      'lang_switch': 'Switch language',
      'photos_title': '📷 Photos',
      'photos_empty': 'No photos yet',
      'photos_hint': 'Install and configure the "Photos" plugin',
      'moments_title': '💬 Moments',
      'moments_empty': 'No moments yet',
      'moments_hint': 'Install and configure the "Moments" plugin',
      'docs_title': '📚 Docs',
      'docs_empty': 'No docs yet',
      'docs_hint': 'Install and configure the "Docs" plugin',
      'steam_title': '🎮 Steam',
      'friends_title': '👥 Friends',
      'friends_empty': 'No posts yet',
      'friends_hint': 'Install and configure the "Friends" plugin',
      'friend_read_more': 'Read More',
      'friends_count': '',
      'friends_count_unit': ' posts',
      'friends_total': '{n} posts total',
      'page_about': 'About',
      'page_projects': 'Projects',
      'page_links': 'Links',
      'page_content': 'Guestbook',
      'page_content_desc': 'Welcome to leave a message!',
      'moment_back': '← Back',
      'moment_detail_title': 'Moment Detail',
      'comments_title': 'Comments',
    },
    ja: {
      name: '日本語',
      short: '日',
      'theme_switch': 'テーマ切替',
      'menu_btn': 'メニュー',
      'leave_trace': '時間に痕跡を残す',
      'author_label': '作者',
      'powered_by': 'Powered by',
      'theme_label': 'Theme',
      'back_home': '← ホームへ戻る',
      'articles_total': '全 {n} 記事',
      'prev_page': '← 前へ',
      'page_info': '{page} / {total} ページ',
      'next_page': '次へ →',
      'table_of_contents': '📖 目次',
      'tags_label': 'タグ：',
      'prev_post': '← 前の記事',
      'next_post': '次の記事 →',
      'no_tags': 'タグなし',
      'stats_views': '閲覧数',
      'stats_title': '📊 統計',
      'quick_links': '🔗 クイックリンク',
      'archives_link': 'アーカイブ',
      'tags_link': 'タグ',
      'categories_link': 'カテゴリー',
      'author_bio': '好奇心を持ち続け、情熱を忘れずに',
      'tags_badge': 'タグ',
      'tags_title': 'すべてのタグ',
      'tags_count': '全 {n} タグ',
      'cat_badge': 'カテゴリー',
      'cat_title': 'すべてのカテゴリー',
      'cat_count': '全 {n} カテゴリー',
      'archives_badge': 'アーカイブ',
      'archives_title': 'タイムライン',
      'archives_page': '{page} ページ',
      'year_month': '{year} 年 {month} 月',
      'links_title': 'リンク集',
      'links_total': '全 {n} リンク',
      'links_loading': '読み込み中...',
      'links_empty': 'リンクはまだありません',
      'links_hint': 'Halo管理画面で「Links」プラグインをインストールして追加してください',
      'links_error': 'リンクの読み込みに失敗しました。ページを更新してください',
      'links_group_desc': 'グループ説明',
      'links_my_info': 'ブログ情報',
      'links_apply': 'リンク申請',
      'links_field_name': 'サイト名',
      'links_field_url': 'URL',
      'links_field_logo': 'ロゴ',
      'links_field_desc': '説明',
      'links_field_rss': 'RSS',
      'links_apply_hint': '相互リンクを歓迎します！コメント欄にブログ情報を残してください：',
      'links_apply_note': '確認後、できるだけ早くリンクを追加します。',
      'links_comment': 'コメント',
      'links_submit_title': 'リンク申請を送信',
      'links_submit_desc': 'サイト情報を入力してください。確認後、追加します',
      'links_submit_basic': '基本情報',
      'links_submit_url': 'サイトURL',
      'links_submit_autofill': '自動入力',
      'links_submit_url_hint': 'URLを入力して「自動入力」をクリックすると情報を取得します',
      'links_submit_name': 'サイト名',
      'links_submit_more_title': 'その他のオプション',
      'links_submit_optional': '任意',
      'links_submit_linkpage': 'リンクページ',
      'links_submit_group': 'グループ',
      'links_submit_default_group': 'デフォルト',
      'links_submit_verify': '認証情報',
      'links_submit_email': 'メールアドレス',
      'links_submit_email_hint': '審査結果の通知を受け取るため',
      'links_submit_code': '認証コード',
      'links_submit_send': '送信',
      'links_submit_captcha': '画像認証',
      'links_submit_cancel': 'キャンセル',
      'links_submit_btn': '申請を送信',
      'links_submit_online': 'オンライン申請',
      'links_submit_unavailable': 'リンク申請サービスは利用できません',
      'links_update_title': 'リンク情報を更新',
      'links_update_desc': '元のメールアドレスで認証してください',
      'links_update_find': 'リンクを検索',
      'links_update_old_url': '元のURL',
      'links_update_old_url_hint': '現在登録されているリンクURLを入力',
      'links_update_new_info': '新しい情報',
      'links_update_email_hint': '元のメールアドレスと一致する必要があります',
      'links_update_btn': '更新を確認',
      'links_update_online': 'リンクを更新',
      'e404_title': 'ページが見つかりません',
      'e404_desc': 'お探しのページは削除されたか、URLが変更された可能性があります',
      'e404_btn_home': 'ホームへ戻る',
      'e404_btn_archives': 'アーカイブを見る',
      'date_format': 'yyyy年M月d日',
      'date_format_short': 'M.dd',
      'lang_switch': '言語切替',
      'photos_title': '📷 フォト',
      'photos_empty': '写真はまだありません',
      'photos_hint': '「フォト」プラグインをインストールして設定してください',
      'moments_title': '💬 モーメント',
      'moments_empty': 'モーメントはまだありません',
      'moments_hint': '「モーメント」プラグインをインストールして設定してください',
      'docs_title': '📚 ドキュメント',
      'docs_empty': 'ドキュメントはまだありません',
      'docs_hint': '「ドキュメント」プラグインをインストールして設定してください',
      'steam_title': '🎮 Steam',
      'friends_title': '👥 フレンズ',
      'friends_empty': '投稿はまだありません',
      'friends_hint': '「フレンズ」プラグインをインストールして設定してください',
      'friend_read_more': '続きを読む',
      'friends_count': '',
      'friends_count_unit': ' 件の投稿',
      'friends_total': '全 {n} 件の投稿',
      'page_about': 'このサイトについて',
      'page_projects': 'プロジェクト',
      'page_links': 'リンク',
      'page_content': 'ゲストブック',
      'page_content_desc': 'メッセージをお寄せください',
      'moment_back': '← 戻る',
      'moment_detail_title': 'モーメント詳細',
      'comments_title': 'コメント',
    },
    ko: {
      name: '한국어',
      short: '한',
      'theme_switch': '테마 전환',
      'menu_btn': '메뉴',
      'leave_trace': '시간에 흔적을 남기다',
      'author_label': '저자',
      'powered_by': 'Powered by',
      'theme_label': 'Theme',
      'back_home': '← 홈으로 돌아가기',
      'articles_total': '총 {n}개의 글',
      'prev_page': '← 이전',
      'page_info': '{page} / {total} 페이지',
      'next_page': '다음 →',
      'table_of_contents': '📖 목차',
      'tags_label': '태그: ',
      'prev_post': '← 이전 글',
      'next_post': '다음 글 →',
      'no_tags': '태그 없음',
      'stats_views': '조회수',
      'stats_title': '📊 통계',
      'quick_links': '🔗 바로가기',
      'archives_link': '글 목록',
      'tags_link': '태그',
      'categories_link': '카테고리',
      'author_bio': '호기심을 유지하고, 열정을 잃지 마세요',
      'tags_badge': '태그',
      'tags_title': '모든 태그',
      'tags_count': '총 {n}개의 태그',
      'cat_badge': '카테고리',
      'cat_title': '모든 카테고리',
      'cat_count': '총 {n}개의 카테고리',
      'archives_badge': '글 목록',
      'archives_title': '타임라인',
      'archives_page': '{page} 페이지',
      'year_month': '{year}년 {month}월',
      'links_title': '링크',
      'links_total': '총 {n}개의 링크',
      'links_loading': '로딩 중...',
      'links_empty': '아직 링크가 없습니다',
      'links_hint': 'Halo 관리자 페이지에서 "Links" 플러그인을 설치하여 추가하세요',
      'links_error': '링크를 불러오지 못했습니다. 페이지를 새로고침 해주세요',
      'links_group_desc': '그룹 설명',
      'links_my_info': '내 블로그 정보',
      'links_apply': '링크 신청',
      'links_field_name': '사이트 이름',
      'links_field_url': 'URL',
      'links_field_logo': '로고',
      'links_field_desc': '설명',
      'links_field_rss': 'RSS',
      'links_apply_hint': '링크 교환을 환영합니다! 댓글에 블로그 정보를 남겨주세요:',
      'links_apply_note': '확인 후 가능한 빨리 링크를 추가하겠습니다.',
      'links_comment': '댓글',
      'links_submit_title': '링크 신청 제출',
      'links_submit_desc': '웹사이트 정보를 입력하면 검토 후 추가됩니다',
      'links_submit_basic': '기본 정보',
      'links_submit_url': '웹사이트 URL',
      'links_submit_autofill': '자동 입력',
      'links_submit_url_hint': 'URL을 입력하고 "자동 입력"을 클릭하면 정보를 가져옵니다',
      'links_submit_name': '사이트 이름',
      'links_submit_more_title': '더 많은 옵션',
      'links_submit_optional': '선택 사항',
      'links_submit_linkpage': '링크 페이지',
      'links_submit_group': '그룹',
      'links_submit_default_group': '기본',
      'links_submit_verify': '인증 정보',
      'links_submit_email': '이메일',
      'links_submit_email_hint': '검토 결과 알림 수신용',
      'links_submit_code': '인증 코드',
      'links_submit_send': '전송',
      'links_submit_captcha': '캡차',
      'links_submit_cancel': '취소',
      'links_submit_btn': '신청 제출',
      'links_submit_online': '온라인 제출',
      'links_submit_unavailable': '링크 제출 서비스를 사용할 수 없습니다',
      'links_update_title': '링크 정보 수정',
      'links_update_desc': '원래 이메일로 인증해주세요',
      'links_update_find': '링크 찾기',
      'links_update_old_url': '원래 URL',
      'links_update_old_url_hint': '현재 등록된 링크 URL을 입력하세요',
      'links_update_new_info': '새 정보',
      'links_update_email_hint': '원래 이메일과 일치해야 합니다',
      'links_update_btn': '수정 확인',
      'links_update_online': '링크 수정',
      'e404_title': '페이지를 찾을 수 없습니다',
      'e404_desc': '찾고 계신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다',
      'e404_btn_home': '홈으로 가기',
      'e404_btn_archives': '글 목록 보기',
      'date_format': 'yyyy년 M월 d일',
      'date_format_short': 'M.dd',
      'lang_switch': '언어 전환',
      'photos_title': '📷 사진',
      'photos_empty': '아직 사진이 없습니다',
      'photos_hint': '"사진" 플러그인을 설치하고 설정하세요',
      'moments_title': '💬 모먼트',
      'moments_empty': '아직 모먼트가 없습니다',
      'moments_hint': '"모먼트" 플러그인을 설치하고 설정하세요',
      'docs_title': '📚 문서',
      'docs_empty': '문서가 아직 없습니다',
      'docs_hint': '"문서" 플러그인을 설치하고 설정하세요',
      'steam_title': '🎮 Steam',
      'friends_title': '👥 친구',
      'friends_empty': '아직 게시물이 없습니다',
      'friends_hint': '"친구" 플러그인을 설치하고 설정하세요',
      'friend_read_more': '더 읽기',
      'friends_count': '',
      'friends_count_unit': ' 개의 글',
      'friends_total': '총 {n}개의 글',
      'page_about': '소개',
      'page_projects': '프로젝트',
      'page_links': '링크',
      'page_content': '방명록',
      'page_content_desc': '메시지를 남겨주세요',
      'moment_back': '← 돌아가기',
      'moment_detail_title': '모먼트 상세',
      'comments_title': '댓글',
    },
  };

  // ===== 状态 =====
  let currentLocale = localStorage.getItem('aurora-lang') || 'zh-CN';
  if (!LOCALES[currentLocale]) currentLocale = 'zh-CN';

  // ⚠️ 使用浅拷贝，避免 Object.assign 污染原始 LOCALES 对象
  let dict = { ...LOCALES[currentLocale] };

  // ===== 工具 =====
  function t(key, params) {
    let str = dict[key] || key;
    if (params) {
      Object.keys(params).forEach(k => {
        str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), params[k]);
      });
    }
    return str;
  }

  // ===== 日期格式化 =====
  function formatDate(dateStr, short) {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    const fmt = short ? dict['date_format_short'] : dict['date_format'];
    const map = {
      'yyyy': d.getFullYear(),
      'yy': String(d.getFullYear()).slice(-2),
      'MMMM': currentLocale === 'en' ? ['January','February','March','April','May','June','July','August','September','October','November','December'][d.getMonth()] : d.getMonth() + 1,
      'MMM': currentLocale === 'en' ? ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()] : d.getMonth() + 1,
      'MM': String(d.getMonth() + 1).padStart(2, '0'),
      'M': d.getMonth() + 1,
      'dd': String(d.getDate()).padStart(2, '0'),
      'd': d.getDate(),
    };
    let result = fmt;
    Object.keys(map).forEach(k => {
      result = result.replace(k, map[k]);
    });
    return result;
  }

  // ===== 从 data-i18n-param-* 提取参数 =====
  function getParams(el) {
    const params = {};
    const prefix = 'data-i18n-param-';
    Array.from(el.attributes).forEach(attr => {
      if (attr.name.startsWith(prefix)) {
        const key = attr.name.slice(prefix.length);
        params[key] = attr.value;
      }
    });
    return Object.keys(params).length > 0 ? params : null;
  }

  // ===== 更新自定义下拉按钮的显示 =====
  function updateLangBtn(locale) {
    const langBtn = document.getElementById('langBtn');
    if (!langBtn) return;
    const flag = document.getElementById('langFlag');
    const text = document.getElementById('langText');
    const flagMap = { 'zh-CN': '🇨🇳', en: '🇬🇧', ja: '🇯🇵', ko: '🇰🇷' };
    if (flag) flag.textContent = flagMap[locale] || '🌐';
    if (text) text.textContent = LOCALES[locale]?.name || locale;
  }

  // ===== DOM 应用翻译 =====
  function applyI18n() {
    // data-i18n-key → textContent
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
      const key = el.getAttribute('data-i18n-key');
      const params = getParams(el);
      const text = t(key, params);
      el.textContent = text;
    });

    // data-i18n-aria → aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', t(key));
    });

    // data-i18n-date: format date elements
    document.querySelectorAll('[data-i18n-date]').forEach(el => {
      const dateStr = el.getAttribute('data-i18n-date') || el.getAttribute('datetime');
      if (dateStr) {
        el.textContent = formatDate(dateStr, el.getAttribute('data-i18n-short') === 'true');
      }
    });

    // data-i18n-yearmonth: format "{year}年{month}月"
    document.querySelectorAll('[data-i18n-yearmonth]').forEach(el => {
      const year = el.getAttribute('data-year');
      const month = el.getAttribute('data-month');
      if (year && month) {
        el.textContent = t('year_month', { year, month });
      }
    });

    // Update html lang attribute
    document.documentElement.setAttribute('lang', currentLocale);

    // Update custom language button display
    updateLangBtn(currentLocale);

    // Update page title
    const titleEl = document.querySelector('title');
    if (titleEl && titleEl.getAttribute('data-i18n-key')) {
      const key = titleEl.getAttribute('data-i18n-key');
      const fallback = titleEl.getAttribute('data-i18n-fallback') || titleEl.textContent;
      titleEl.textContent = t(key) !== key ? t(key) : fallback;
    }
  }

  // ===== 切换语言 =====
  function switchLocale(locale) {
    if (!LOCALES[locale]) return;
    currentLocale = locale;
    localStorage.setItem('aurora-lang', locale);
    // ✅ 重新赋值浅拷贝，不再用 Object.assign 污染原始对象
    dict = { ...LOCALES[locale] };
    applyI18n();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { locale } }));
  }

  // ===== 暴露全局 =====
  window.__ = t;
  window.switchLocale = switchLocale;
  window.formatDate = formatDate;
  window.currentLocale = () => currentLocale;

  // ===== 初始化 =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyI18n);
  } else {
    applyI18n();
  }
})();
