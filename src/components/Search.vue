<template>
  <div class="search-page">
    <!-- 顶部栏：返回+搜索框 -->
    <div class="search-header">
      <button class="back-btn" @click="goBack">返回</button>
      <!-- 搜索输入框 -->
      <div class="search-input-wrap">
        <input
          type="text"
          class="search-input"
          v-model="searchKeyword"
          placeholder="搜索冥想课程（如：呼吸、睡眠）"
          @input="filterMeditationList"
        />
        <!-- 清空按钮 -->
        <button 
          class="clear-btn" 
          @click="clearSearch"
          v-if="searchKeyword"
        >
          ×
        </button>
      </div>
    </div>

    <!-- 搜索结果区域 -->
    <div class="search-result">
      <!-- 无关键词时提示 -->
      <div class="empty-tip" v-if="!searchKeyword">
        请输入关键词搜索冥想课程
      </div>

      <!-- 无结果时提示 -->
      <div class="empty-tip" v-else-if="filteredResults.length === 0">
        未找到包含「{{ searchKeyword }}」的课程
      </div>

      <!-- 搜索结果列表 -->
      <div class="result-list" v-else>
        <div 
          class="result-item"
          v-for="(item, index) in filteredResults"
          :key="index"
          @click="goToDetail(item.link)"
        >
          <img :src="item.img" alt="meditation" class="result-img" />
          <div class="result-info">
            <h3 class="result-title">{{ item.title }}</h3>
            <p class="result-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

// 1. 导入所有冥想图片（与MeditationSpace.vue路径一致，确保图片正常显示）
import breathAnchorImg from '../assets/images/meditation/breath-anchor.jpg';
import bodyScanImg from '../assets/images/meditation/body-scan.jpg';
import mindfulWalkingImg from '../assets/images/meditation/mindful-walking.jpg';
import stressReleaseImg from '../assets/images/meditation/stress-release.jpg';
import sleepPrepImg from '../assets/images/meditation/sleep-prep.jpg';
import selfCompassionImg from '../assets/images/meditation/self-compassion.jpg';
import focusEnhanceImg from '../assets/images/meditation/focus-enhance.jpg';
import emotionAwarenessImg from '../assets/images/meditation/emotion-awareness.jpg';
import natureConnectionImg from '../assets/images/meditation/nature-connection.jpg';

const router = useRouter();

// 2. 冥想课程数据（与MeditationSpace.vue完全一致，确保搜索源同步）
const meditationList = [
  {
    img: breathAnchorImg,
    title: '呼吸锚定练习',
    desc: '通过专注呼吸稳定情绪，适合初学者的5分钟快速冥想',
    link: '/meditation-detail/1'
  },
  {
    img: bodyScanImg,
    title: '全身放松扫描',
    desc: '从头到脚逐步放松肌肉，缓解身体紧绷感的10分钟练习',
    link: '/meditation-detail/2'
  },
  {
    img: mindfulWalkingImg,
    title: '正念行走冥想',
    desc: '将注意力集中在行走感受上，适合久坐后的动态冥想',
    link: '/meditation-detail/3'
  },
  {
    img: stressReleaseImg,
    title: '压力释放呼吸法',
    desc: '4-7-8呼吸法结合身体放松，快速缓解急性压力',
    link: '/meditation-detail/4'
  },
  {
    img: sleepPrepImg,
    title: '睡前静心准备',
    desc: '引导身心从活跃状态过渡到休息模式，改善入睡困难',
    link: '/meditation-detail/5'
  },
  {
    img: selfCompassionImg,
    title: '自我关怀冥想',
    desc: '培养对自己的善意与接纳，减少自我批评的15分钟练习',
    link: '/meditation-detail/6'
  },
  {
    img: focusEnhanceImg,
    title: '专注力提升训练',
    desc: '通过注意力聚焦练习，增强工作学习时的专注时长',
    link: '/meditation-detail/7'
  },
  {
    img: emotionAwarenessImg,
    title: '情绪觉察练习',
    desc: '温和地观察并接纳情绪变化，提升情绪管理能力',
    link: '/meditation-detail/8'
  },
  {
    img: natureConnectionImg,
    title: '自然连接冥想',
    desc: '通过想象自然场景，感受与环境的联结，找回内心平静',
    link: '/meditation-detail/9'
  }
];

// 3. 搜索相关响应式变量
const searchKeyword = ref(''); // 搜索关键词
const filteredResults = ref([]); // 过滤后的搜索结果

// 4. 实时过滤搜索结果（匹配标题或描述，不区分大小写）
const filterMeditationList = () => {
  const keyword = searchKeyword.value.trim().toLowerCase();
  if (!keyword) {
    filteredResults.value = [];
    return;
  }
  // 匹配逻辑：标题包含关键词 或 描述包含关键词
  filteredResults.value = meditationList.filter(item => 
    item.title.toLowerCase().includes(keyword) || 
    item.desc.toLowerCase().includes(keyword)
  );
};

// 5. 清空搜索关键词
const clearSearch = () => {
  searchKeyword.value = '';
  filteredResults.value = [];
};

// 6. 点击结果跳转至详情页
const goToDetail = (link) => {
  router.push(link);
};

const goBack = () => {
  router.replace('/meditation-space'); 
};
</script>

<style scoped>
/* 搜索页整体样式 */
.search-page {
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 16px;
  box-sizing: border-box;
}

/* 顶部栏样式 */
.search-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.back-btn {
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

/* 搜索输入框样式 */
.search-input-wrap {
  width: 100%;
  min-width: 0;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  min-width: 0;
  padding: 10px 16px;
  padding-right: 40px; /* 给清空按钮留空间 */
  border: 1px solid #eee;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.search-input::placeholder {
  color: #999;
}

/* 清空按钮样式 */
.clear-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: #eee;
  color: #666;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

/* 搜索结果区域样式 */
.search-result {
  width: 100%;
}

.empty-tip {
  text-align: center;
  color: #999;
  font-size: 14px;
  padding: 40px 0;
}

/* 结果列表样式 */
.result-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.result-item {
  display: flex;
  gap: 12px;
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s;
}

.result-item:hover {
  background-color: #fafafa;
}

.result-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
}

.result-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}

.result-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.result-desc {
  font-size: 12px;
  color: #666;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  
  overflow: hidden;
  line-height: 1.4;
}
</style>