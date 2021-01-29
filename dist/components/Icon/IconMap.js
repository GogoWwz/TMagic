var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 箭头
var arrows = [
    "arrow-down", "arrow-up", "arrow-right", "arrow-left",
    "arrow-circle-down", "arrow-circle-up", "arrow-circle-right", "arrow-circle-left",
    "chevron-down", "chevron-left", "chevron-right", "chevron-up"
];
// 添加
var plus = [
    "plus", "plus-circle", 'plus-square'
];
// 删除
var $delete = [
    'trash-alt', "trash"
];
// 分享
var share = [
    "share", "share-alt", "share-alt-square", "share-square"
];
// 锁
var lock = [
    "location-arrow", "lock", "lock-open"
];
// 文件
var file = [
    "file-archive", "file-alt", "file", "file-medical", "clone", "folder", "folder-open",
    "folder-minus"
];
// 用户
var user = [
    "user-tie", "user-plus", "user-circle", "user-alt", "user", "users",
    "user-friends", "male", "female"
];
// 工具
var tool = [
    "search", "search-plus", "search-minus",
    "edit", "pen-square", "upload", "cloud-upload-alt", "file-upload"
];
// 信息
var message = [
    "envelope", "envelope-open", "comments", "comment-alt", "comment"
];
var all = __spreadArrays(arrows, plus, $delete, share, lock, file, user, tool, message);
export default all;
