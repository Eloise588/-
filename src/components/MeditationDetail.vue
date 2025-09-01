<template>
  <div class="meditation-detail">
    <!-- 顶部栏 - 与冥想空间保持一致 -->
    <div class="top-bar">
      <button class="back-btn" @click="goBack">返回</button>
      <h1 class="title">冥想详情</h1>
      <div class="search-btn-placeholder"></div> <!-- 占位元素保持标题居中 -->
    </div>

    <!-- 主内容区 -->
    <div class="content-container">
      <!-- 顶部图片区域 -->
      <div class="meditation-img-container">
        <img 
          :src="currentMeditation.img"
          :alt="currentMeditation.title" 
          class="meditation-img"
        >
        <div class="duration-badge">{{ getTotalDuration() }}</div>
      </div>

      <!-- 标题和导师信息 -->
      <div class="meditation-header">
        <h2 class="meditation-title">{{ currentMeditation.title }}</h2>
        <p class="instructor-info flex items-center">
          <i class="fa fa-user-circle-o mr-2"></i>
          冥想导师：王老师
        </p>
      </div>

      <!-- 练习介绍 -->
      <div class="meditation-description card">
        <p class="description-text leading-relaxed">
          {{ currentMeditation.desc }}
        </p>
        
        <!-- 特点标签 -->
        <div class="tags-container flex flex-wrap gap-2 mt-4">
          <span class="tag inline-flex items-center px-3 py-1 rounded-full text-sm">
            <i class="fa fa-check-circle mr-1"></i>操作简单
          </span>
          <span class="tag inline-flex items-center px-3 py-1 rounded-full text-sm">
            <i class="fa fa-check-circle mr-1"></i>聚焦当下
          </span>
          <span class="tag inline-flex items-center px-3 py-1 rounded-full text-sm">
            <i class="fa fa-check-circle mr-1"></i>短时有效
          </span>
        </div>
      </div>

      <!-- 章节目录 -->
      <div class="chapters-section">
        <div class="section-header">
          <h3 class="section-title">章节目录</h3>
          <span class="update-info text-sm">更新至第五节</span>
        </div>
        
        <!-- 章节列表 -->
        <div class="chapters-list">
          <!-- 章节1 -->
          <div 
            class="chapter-item card"
            @click="handleChapterClick('5分钟呼吸定念：新手入门')"
          >
            <div class="chapter-info">
              <h4 class="chapter-title">{{ '5分钟呼吸定念：新手入门' }}</h4>
              <div class="chapter-meta flex items-center text-sm">
                <i class="fa fa-clock-o mr-1"></i>
                <span>5分钟</span>
              </div>
            </div>
            <div class="chapter-actions flex items-center gap-2">
              <button 
                class="play-btn"
                @click.stop="playChapter('5分钟呼吸定念：新手入门')"
              >
                <i class="fa fa-play"></i>
              </button>
              <button 
                class="download-btn"
                @click.stop="playChapter('从上次位置开始')"
              >
                <i class="fa fa-download"></i>
              </button>
            </div>
          </div>
          
          <!-- 章节2 -->
          <div 
            class="chapter-item card"
            @click="handleChapterClick('跟着呼吸，一键清空杂念')"
          >
            <div class="chapter-info">
              <h4 class="chapter-title">{{ '跟着呼吸，一键清空杂念' }}</h4>
              <div class="chapter-meta flex items-center text-sm">
                <i class="fa fa-clock-o mr-1"></i>
                <span>20分钟</span>
              </div>
            </div>
            <div class="chapter-actions flex items-center gap-2">
              <button 
                class="play-btn"
                @click.stop="playChapter('跟着呼吸，一键清空杂念')"
              >
                <i class="fa fa-play"></i>
              </button>
              <button 
                class="download-btn"
                @click.stop
              >
                <i class="fa fa-download"></i>
              </button>
            </div>
          </div>
          
          <!-- 章节3 -->
          <div 
            class="chapter-item card"
            @click="handleChapterClick('呼吸轻舞：5分钟身心锚定')"
          >
            <div class="chapter-info">
              <h4 class="chapter-title">{{ '呼吸轻舞：5分钟身心锚定' }}</h4>
              <div class="chapter-meta flex items-center text-sm">
                <i class="fa fa-clock-o mr-1"></i>
                <span>5分钟</span>
              </div>
            </div>
            <div class="chapter-actions flex items-center gap-2">
              <button 
                class="play-btn"
                @click.stop="playChapter('呼吸轻舞：5分钟身心锚定')"
              >
                <i class="fa fa-play"></i>
              </button>
              <button 
                class="download-btn"
                @click.stop
              >
                <i class="fa fa-download"></i>
              </button>
            </div>
          </div>
          
          <!-- 更多章节占位 -->
          <div class="more-chapters card">
            <div class="more-chapters-text">
              <p>滑动查看更多章节</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 推荐练习 -->
      <div class="recommendations-section">
        <h3 class="section-title">为你推荐</h3>
        <div class="recommendations-grid">
          <!-- 推荐1 -->
          <div class="recommendation-item card" @click="goToMeditationDetail('/meditation-detail/5')">
            <div class="recommendation-img-container">
              <img src="https://picsum.photos/id/1000/300/200" alt="清晨唤醒冥想" class="recommendation-img">
              <span class="recommendation-duration">10分钟</span>
            </div>
            <div class="recommendation-info">
              <h4 class="recommendation-title">清晨唤醒冥想</h4>
              <p class="recommendation-desc">开启活力满满的一天</p>
            </div>
          </div>
          
          <!-- 推荐2 -->
          <div class="recommendation-item card" @click="goToMeditationDetail('/meditation-detail/6')">
            <div class="recommendation-img-container">
              <img src="https://picsum.photos/id/1002/300/200" alt="睡前放松引导" class="recommendation-img">
              <span class="recommendation-duration">15分钟</span>
            </div>
            <div class="recommendation-info">
              <h4 class="recommendation-title">睡前放松引导</h4>
              <p class="recommendation-desc">帮助快速入眠</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部操作栏 -->
    <div class="bottom-action-bar">
      <div class="progress-container">
        <p class="progress-text text-xs">当前进度</p>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 30%"></div>
        </div>
      </div>
      <button 
        class="start-btn"
        @click="startPractice"
      >
        <i class="fa fa-play-circle mr-2"></i>
        <span>开始练习</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import breathAnchorImg from '../assets/images/meditation/breath-anchor.jpg';

const router = useRouter();

// 当前冥想数据 - 可以根据路由参数动态获取
const currentMeditation = ref({
  img: breathAnchorImg,
  title: '呼吸锚定练习',
  desc: '呼吸锚定练习是一种简单易操作的入门冥想方式，核心是将注意力聚焦于自然呼吸这一稳定"锚点"——可以是鼻孔处空气的出入感，也可以是胸腔或腹部的起伏。练习时，只需以舒适姿势静坐，让注意力轻轻"贴"在呼吸上，当思绪走神时，不批判、不焦虑，温和地将注意力拉回呼吸即可。短短几分钟，就能帮助平复杂念、安定心神，尤其适合新手快速掌握。',
  link: '/meditation-detail/1',
  category: 'anxiety'
});

// 计算总时长
const getTotalDuration = () => {
  // 实际应用中可以根据章节数据计算总时长
  return "约30分钟";
};

// 导航栏返回按钮
const goBack = () => {
  router.replace('/meditation-space');
};

// 跳转到其他冥想详情
const goToMeditationDetail = (link) => {
  router.replace(link);
};

// 章节点击事件
const handleChapterClick = (title) => {
  alert(`查看章节详情: ${title}`);
};

// 播放章节
const playChapter = (title) => {
  alert(`准备播放: ${title}`);
};

// 开始练习按钮
const startPractice = () => {
  alert('开始呼吸锚定练习');
};
</script>

<style scoped>
/* 基础样式保持与冥想空间一致 */
.meditation-detail {
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding-bottom: 70px; /* 为底部操作栏留出空间 */
  box-sizing: border-box;
}

/* 顶部栏样式与冥想空间统一 */
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f9f9f9;
  position: sticky;
  top: 0;
  z-index: 10;
}

.back-btn {
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.search-btn-placeholder {
  width: 40px; /* 与搜索按钮宽度一致，保持标题居中 */
}

/* 内容容器 */
.content-container {
  padding: 0 16px;
}

/* 图片区域 */
.meditation-img-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
}

.meditation-img {
  width: 100%;
  height: auto;
  display: block;
}

.duration-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(66, 185, 131, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

/* 标题信息 */
.meditation-header {
  margin-bottom: 16px;
}

.meditation-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 8px 0;
}

.instructor-info {
  color: #666;
  font-size: 14px;
  margin: 0;
}

/* 通用卡片样式 */
.card {
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
}

/* 描述区域 */
.meditation-description {
  line-height: 1.6;
}

.description-text {
  margin: 0;
  color: #333;
  font-size: 14px;
}

.tags-container {
  margin-top: 12px;
}

.tag {
  background-color: #e2ebe2;
  color: #6a6c6b;
}

/* 章节区域 */
.chapters-section {
  margin-bottom: 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.update-info {
  color: #666;
}

.chapters-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chapter-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.chapter-item:hover {
  transform: translateY(-2px);
}

.chapter-info {
  flex: 1;
}

.chapter-title {
  font-size: 16px;
  margin: 0 0 4px 0;
  font-weight: 500;
}

.chapter-meta {
  color: #666;
}

.chapter-actions {
  display: flex;
  gap: 8px;
}

.play-btn, .download-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.play-btn {
  background-color: rgba(66, 185, 131, 0.1);
  color: #42b983;
}

.play-btn:hover {
  background-color: rgba(66, 185, 131, 0.2);
}

.download-btn {
  background-color: #f0f0f0;
  color: #666;
}

.download-btn:hover {
  background-color: #e0e0e0;
}

.more-chapters {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px dashed #ddd;
  padding: 16px;
}

.more-chapters-text p {
  color: #999;
  margin: 0;
  font-size: 14px;
}

/* 推荐区域 */
.recommendations-section {
  margin-bottom: 16px;
}

.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.recommendation-item {
  cursor: pointer;
  transition: transform 0.2s;
  margin-bottom: 0;
  overflow: hidden;
}

.recommendation-item:hover {
  transform: translateY(-3px);
}

.recommendation-img-container {
  position: relative;
  margin-bottom: 8px;
}

.recommendation-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
}

.recommendation-duration {
  position: absolute;
  bottom: 4px;
  left: 4px;
  background-color: rgba(100, 111, 106, 0.8);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
}

.recommendation-info {
  text-align: left;
}

.recommendation-title {
  font-size: 14px;
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recommendation-desc {
  font-size: 12px;
  color: #666;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
 
  overflow: hidden;
}

/* 底部操作栏 */
.bottom-action-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.progress-container {
  flex: 1;
}

.progress-text {
  color: #666;
  margin: 0 0 4px 0;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background-color: #eee;
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #42b983;
  border-radius: 2px;
}

.start-btn {
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
  margin-left: 16px;
}

.start-btn:hover {
  background-color: #359e6d;
}
</style>
