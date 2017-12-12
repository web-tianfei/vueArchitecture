import Empty from '../empty.vue'
import Home from './Home/home.vue'
/*
	将初始化不加载显示的模块单独打包
	点击时按需加载
*/
const ChinaGF = () => import(/* webpackChunkName: "chinaGF" */ './ChinaGF/chinaGF.vue')
const LatestNews = () => import(/* webpackChunkName: "latestNews" */ './LatestNews/latestNews.vue')
const DataSource = () => import(/* webpackChunkName: "dataSource" */ './DataSource/dataSource.vue')
const CommonSupport = () => import(/* webpackChunkName: "commonSupport" */ './CommonSupport/commonSupport.vue')

export default { Empty, Home, ChinaGF, LatestNews, DataSource, CommonSupport }