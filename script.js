const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');
const timeDisplay = document.getElementById('time');

// 播放/暂停控制
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
    } else {
        audio.pause();
        playBtn.textContent = '▶';
    }
});

// 更新进度条
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;

    // 时间显示格式化
    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec.toString().padStart(2, '0')}`;
    };

    timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
});

// 拖动进度条控制播放进度
progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// 初始化加载元数据
audio.addEventListener('loadedmetadata', () => {
    progress.value = 0;
});