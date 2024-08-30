document.addEventListener('DOMContentLoaded', function() {
    // 스킬 레벨 (퍼센트) 설정
    const skillLevels = {
        Fg:70,
        HTML: 90,
        CSS: 90,
        Js: 80
    };

    // 모든 스킬바 요소 선택
    const skillBars = document.querySelectorAll('.skill_bar li');

    skillBars.forEach(function(skillBar) {
        // 스킬 이름 가져오기
        const skillName = skillBar.querySelector('.skill_name').textContent;
        // 애니메이션이 적용될 바 요소
        const aniBar = skillBar.querySelector('.ani_bar');
        
        // 해당 스킬의 레벨 가져오기
        const skillLevel = skillLevels[skillName];

        console.log(skillName)

        // 애니메이션 시작 (너비 조정)
        setTimeout(function() {
            aniBar.style.width = skillLevel + '%';
        }, 100); // 100ms 딜레이 후 애니메이션 시작
    });
});
