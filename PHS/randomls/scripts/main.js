document.addEventListener('DOMContentLoaded', () => {
  const menuItems = [
      {
          name: "김치찌개",
          image: "kimchi-jjigae.jpg",
          distance: "500m",
          cost: "9,000원",
          calories: "450kcal",
          likes: "❤️❤️❤️❤️❤️",
          total: "100% like it"
      },
      {
          name: "된장찌개",
          image: "doenjang-jjigae.jpg",
          distance: "300m",
          cost: "8,000원",
          calories: "400kcal",
          likes: "❤️❤️❤️❤️",
          total: "80% like it"
      },
      {
          name: "비빔밥",
          image: "bibimbap.jpg",
          distance: "200m",
          cost: "10,000원",
          calories: "500kcal",
          likes: "❤️❤️❤️❤️❤️❤️",
          total: "100% like it"
      },
      {
          name: "삼겹살",
          image: "samgyeopsal.jpg",
          distance: "1km",
          cost: "15,000원",
          calories: "700kcal",
          likes: "❤️❤️❤️❤️❤️",
          total: "100% like it"
      },
      {
          name: "불고기",
          image: "bulgogi.jpg",
          distance: "800m",
          cost: "13,000원",
          calories: "600kcal",
          likes: "❤️❤️❤️❤️❤️",
          total: "100% like it"
      },
      {
          name: "냉면",
          image: "naengmyeon.jpg",
          distance: "600m",
          cost: "10,000원",
          calories: "350kcal",
          likes: "❤️❤️❤️❤️",
          total: "80% like it"
      },
      {
          name: "칼국수",
          image: "kalguksu.jpg",
          distance: "400m",
          cost: "11,000원",
          calories: "400kcal",
          likes: "❤️❤️❤️❤️",
          total: "80% like it"
      },
      {
          name: "떡볶이",
          image: "tteokbokki.jpg",
          distance: "200m",
          cost: "7,500원",
          calories: "300kcal",
          likes: "❤️❤️❤️❤️❤️",
          total: "100% like it"
      },
      {
          name: "치킨",
          image: "chicken.jpg",
          distance: "1.2km",
          cost: "22,000원",
          calories: "800kcal",
          likes: "❤️❤️❤️❤️❤️",
          total: "100% like it"
      },
      {
          name: "피자",
          image: "pizza.jpg",
          distance: "900m",
          cost: "26,000원",
          calories: "1000kcal",
          likes: "❤️❤️❤️❤️❤️",
          total: "100% like it"
      }
  ];

  const randomButton = document.getElementById('randomButton');
  const resetButton = document.getElementById('resetButton');
  const menuImage = document.getElementById('menuImage');
  const menuName = document.getElementById('menuName');
  const menuDistance = document.getElementById('menuDistance').querySelector('span');
  const menuCost = document.getElementById('menuCost').querySelector('span');
  const menuCalories = document.getElementById('menuCalories').querySelector('span');
  const menuLikes = document.getElementById('menuLikes').querySelector('span');
  const menuTotal = document.getElementById('menuTotal').querySelector('span');

  randomButton.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * menuItems.length);
      const menu = menuItems[randomIndex];
      menuImage.src = './images/' + menu.image;
      menuName.textContent = menu.name;
      menuDistance.textContent = menu.distance;
      menuCost.textContent = menu.cost;
      menuCalories.textContent = menu.calories;
      menuLikes.textContent = menu.likes;
      menuTotal.textContent = menu.total;
  });

  resetButton.addEventListener('click', () => {
      menuImage.src ='./images/default.jpg';
      menuName.textContent = "다시 골라보자!";
      menuDistance.textContent = "가까운 곳으로!";
      menuCost.textContent = "착한 가격이 좋아!";
      menuCalories.textContent = "맛있게 먹으면 0 칼로리!";
      menuLikes.textContent = "다들 좋아해?";
      menuTotal.textContent = "뭘 먹으면 잘 먹었다고 소문이 날까?";
  });
});
