var HOST_URI = 'http://shanqibei.com';

var GET_USER_BY_ID = '/user';
var GET_ARTICLE = '/article';

function obj2uri (obj) {
    return Object.keys(obj).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
    }).join('&');
}

module.exports = {
    // 获取用户数据
    getUserById: function (id, obj) {
        console.log(HOST_URI + GET_USER_BY_ID + '/' + id　+ '?' + obj2uri(obj))
        return HOST_URI + GET_USER_BY_ID + '/' + id　+ '?' + obj2uri(obj);
    },
     // 获取文章数据
    getArticleList: function (id, obj) {
        return HOST_URI + GET_ARTICLE + '?' + obj2uri(obj);
    },
    // 获取文章数据
    getArticleById: function (id, obj) {
        return HOST_URI + GET_ARTICLE + '/' + id + '?' + obj2uri(obj);
    }
};