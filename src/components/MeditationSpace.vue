<template>
  <div class="meditation-space">
    <!-- 顶部栏 -->
    <div class="top-bar">
      <button class="back-btn" @click="goBack">返回</button>
      <h1 class="title">冥想空间</h1>
      <button class="search-btn" @click="goToSearchPage">
        <span>🔍</span> 
      </button>
    </div>

    <!-- 导航栏 -->
    <div class="nav-scroll">
      <div 
        v-for="(item, index) in navList" 
        :key="index" 
        class="nav-item"
        :class="{ 'active': activeNav === index }"
        @click="changeNav(index)"
      >
        {{ item.name }}
      </div>
    </div>

    <!-- 冥想内容列表 -->
    <div class="meditation-list">
      <div 
        v-for="(meditation, index) in filteredMeditations" 
        :key="index" 
        class="meditation-item"
        @click="goToMeditationDetail(meditation.link)"
      >
        <img :src="meditation.img" alt="meditation" class="meditation-img" />
        <h3 class="meditation-title">{{ meditation.title }}</h3>
        <p class="meditation-desc">{{ meditation.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
const router = useRouter();

// 导入所有冥想图片
import breathAnchorImg from '../assets/images/meditation/breath-anchor.jpg';
import bodyScanImg from '../assets/images/meditation/body-scan.jpg';
import mindfulWalkingImg from '../assets/images/meditation/mindful-walking.jpg';
import stressReleaseImg from '../assets/images/meditation/stress-release.jpg';
import sleepPrepImg from '../assets/images/meditation/sleep-prep.jpg';
import selfCompassionImg from '../assets/images/meditation/self-compassion.jpg';
import focusEnhanceImg from '../assets/images/meditation/focus-enhance.jpg';
import emotionAwarenessImg from '../assets/images/meditation/emotion-awareness.jpg';
import natureConnectionImg from '../assets/images/meditation/nature-connection.jpg';

// 返回按钮逻辑
const goBack = () => {
  router.replace('/psychology-lab'); 
};

// 搜索按钮跳转逻辑 - 优化版本
const goToSearchPage = async () => {
  router.replace('/search'); 
};

// 导航栏数据
const navList = [
  { name: '首页推荐', category: 'all' },
  { name: '缓解焦虑', category: 'anxiety' },
  { name: '解压放松', category: 'relax' },
  { name: '睡眠', category: 'sleep' },
  { name: '身心连接', category: 'connection' },
  { name: '专注', category: 'focus' },
  { name: '人际互动', category: 'interpersonal' }
];

// 当前激活的导航项
const activeNav = ref(0);

// 切换导航项
const changeNav = (index) => {
  activeNav.value = index;
};

// 冥想内容数据
const meditationList = [
  {
    img: breathAnchorImg,
    title: '呼吸锚定练习',
    desc: '通过专注呼吸稳定情绪，适合初学者的5分钟快速冥想',
    link: '/meditation-detail/1',
    category: 'anxiety'
  },
  {
    img: bodyScanImg,
    title: '全身放松扫描',
    desc: '从头到脚逐步放松肌肉，缓解身体紧绷感的10分钟练习',
    link: '/meditation-detail/2',
    category: 'relax'
  },
  {
    img: mindfulWalkingImg,
    title: '正念行走冥想',
    desc: '将注意力集中在行走感受上，适合久坐后的动态冥想',
    link: '/meditation-detail/3',
    category: 'connection'
  },
  {
    img: stressReleaseImg,
    title: '压力释放呼吸法',
    desc: '4-7-8呼吸法结合身体放松，快速缓解急性压力',
    link: '/meditation-detail/4',
    category: 'anxiety'
  },
  {
    img: sleepPrepImg,
    title: '睡前静心准备',
    desc: '引导身心从活跃状态过渡到休息模式，改善入睡困难',
    link: '/meditation-detail/5',
    category: 'sleep'
  },
  {
    img: selfCompassionImg,
    title: '自我关怀冥想',
    desc: '培养对自己的善意与接纳，减少自我批评的15分钟练习',
    link: '/meditation-detail/6',
    category: 'interpersonal'
  },
  {
    img: focusEnhanceImg,
    title: '专注力提升训练',
    desc: '通过注意力聚焦练习，增强工作学习时的专注时长',
    link: '/meditation-detail/7',
    category: 'focus'
  },
  {
    img: emotionAwarenessImg,
    title: '情绪觉察练习',
    desc: '温和地观察并接纳情绪变化，提升情绪管理能力',
    link: '/meditation-detail/8',
    category: 'interpersonal'
  },
  {
    img: natureConnectionImg,
    title: '自然连接冥想',
    desc: '通过想象自然场景，感受与环境的联结，找回内心平静',
    link: '/meditation-detail/9',
    category: 'relax'
  }
];

// 根据当前选中的导航项过滤冥想内容
const filteredMeditations = computed(() => {
  const currentCategory = navList[activeNav.value].category;
  if (currentCategory === 'all') {
    return meditationList;
  }
  return meditationList.filter(item => item.category === currentCategory);
});

// 点击冥想项跳转逻辑
const goToMeditationDetail = (link) => {
  router.replace(link);
};
</script>

<style scoped>
/* 样式保持不变 */
.meditation-space {
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 16px;
  box-sizing: border-box;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.back-btn {
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.search-btn {
  background: transparent;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 4px;
  margin: 0;
  transition: transform 0.2s ease;
}

.search-btn:hover {
  transform: scale(1.1);
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.nav-scroll {
  display: flex;
  overflow-x: auto;
  margin-bottom: 16px;
  padding-bottom: 8px;
}

.nav-item {
  flex: 0 0 auto;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 20px;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.nav-item.active {
  background-color: #42b983;
  color: white;
  border-color: #42b983;
}

.meditation-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.meditation-item {
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s;
}

.meditation-item:hover {
  transform: translateY(-3px);
}

.meditation-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}

.meditation-title {
  font-size: 16px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 4px;
}

.meditation-desc {
  font-size: 12px;
  color: #666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 28px;
}
</style>
