document.querySelectorAll('.filter-chip').forEach(chip=>{
    chip.addEventListener('click',()=>{
      document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
    });
  });
// حفظ تقدم الطالب
function markAsComplete() {
    const courseKey = currentCourseKey;
    const lessonId = currentLessonIndex;
    
    let progress = JSON.parse(localStorage.getItem("userProgress")) || {};
    if (!progress[courseKey]) progress[courseKey] = [];
    if (!progress[courseKey].includes(lessonId)) progress[courseKey].push(lessonId);
    
    localStorage.setItem("userProgress", JSON.stringify(progress));
    alert("✅ تم حفظ التقدم!");
    updateOverallProgress();
}
