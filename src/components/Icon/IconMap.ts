// 箭头
const arrows: Array<string> = [
  "arrow-down", "arrow-up", "arrow-right", "arrow-left",
  "arrow-circle-down", "arrow-circle-up", "arrow-circle-right", "arrow-circle-left",
  "chevron-down", "chevron-left", "chevron-right", "chevron-up"
]

// 添加
const plus: Array<string> = [
  "plus", "plus-circle", 'plus-square'
]

// 删除
const $delete: Array<string> = [
  'trash-alt', "trash"
]

// 分享
const share: Array<string> = [
  "share", "share-alt", "share-alt-square", "share-square"
]

// 锁
const lock: Array<string> = [
  "location-arrow", "lock", "lock-open"
]

// 文件
const file: Array<string> = [
  "file-archive", "file-alt", "file", "file-medical", "clone", "folder", "folder-open",
  "folder-minus"
]

// 用户
const user: Array<string> = [
  "user-tie", "user-plus", "user-circle", "user-alt", "user", "users",
  "user-friends", "male", "female"
]

// 工具
const tool: Array<string> = [
  "search", "search-plus", "search-minus",
  "edit", "pen-square", "upload", "cloud-upload-alt", "file-upload"
]

// 信息
const message: Array<string> = [
  "envelope", "envelope-open", "comments", "comment-alt", "comment"
]

const all = [
  ...arrows,
  ...plus,
  ...$delete,
  ...share,
  ...lock,
  ...file,
  ...user,
  ...tool,
  ...message
]

export default all