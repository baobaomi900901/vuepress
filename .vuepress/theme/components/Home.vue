<template>
  <div class="HomePage bg-gray-800 w-full flex">
    <div class="HomePage_left h-screen w-5/12 bg-gray-400">
      <div
        class="
          HomePage_left_menu
          h-5/6
          bg-gray-200
          flex
          justify-center
          items-center
        "
      >
        <ul
          class="text-gray-900 text-3xl font-semibold inline-block w-1/2 h-auto"
        >
          <h3 class="text-base text-gray-500 mb-10 uppercase">Menu</h3>
          <li class="Home_link mb-3"><a href="">Home</a></li>
          <li class="Porfolio_link mb-3"><a href="">Porfolio</a></li>
          <li class="Work_link mb-3"><a href="">Work</a></li>
          <li class="Creativity_link mb-3"><a href="">Creativity</a></li>
        </ul>
      </div>
      <div class=""><img src="" alt="" /></div>
    </div>
    <div class="HomePage_content w-full bg-red-300">
      <div class="HomePage_content_head  h-screen bg-gray-500">
        <div class="Introduce h-5/6">
          <div class="myself">
            <div class="vc font-black">Welcome</div>
            <div class="myname font-bold ">i'm<br />maosusu<br />designer</div>
          </div>
        </div>
        <div class="flex h-1/6">
          <div class="blue w-1/2 h-full">
            <p>about me</p>
          </div>
          <div class="about w-1/2">
            <div class="about-describe">
              <p>We're a 3d/motion /interaction /UI /UX & webflow developer.</p>
            </div>
            <div class="about-linkCoord">
              <a href="">dribbble</a>
              <p class="about-coord">114.089592,22.635423</p>
            </div>
          </div>
        </div>
      </div>
      <Introduction />
    </div>
  </div>
</template>

<script>
import Introduction from './Introduction.vue'

export default {
  name: "Home",
  components:{
    Introduction
  }
};
</script>

<style scoped>
.Porfolio_link:hover::before {
  content: "😼.";
}
.Work_link:hover::before {
  content: "🤺.";
}
.Creativity_link:hover::before {
  content: "💡.";
}
.HomePage_content {
  overflow: auto;
}
.HomePage_content_head {
  height: 100%;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 16.6666%; */
}
.Introduce {
  /* background: none;
  grid-column: 1/3;
  grid-row: 1/2; */

  display: flex;
  justify-content: center;
  align-items: center;
}
.Introduce > .myself {
  color: rgba(255, 255, 255, 0.8);
  text-transform: Uppercase;
  line-height: 80px;
}

.vc {
  font-size: 14px;
  /* color: #fff; */
  line-height: 24px;
  margin-bottom: 32px;
}

.myname {
  font-size: 100px;
  margin-bottom: 40px;
  float: flex;
}
.blue {
  background: #0042f6;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 800;
  color: #fff;
  text-align: center;
}

.about {
  color: #fff;
  font-size: 16px;
  text-transform: Uppercase;

  padding: 0px 32px;

  display: grid;
  grid-template-rows: auto 64px;
}

.about-describe {
  border-bottom: 1px solid #fff;
  display: grid;
  align-items: end;
}

.about-describe p {
  margin-bottom: 24px;
}

.about-linkCoord {
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-self: center;
}

.about-linkCoord a {
  color: #fff;
  text-decoration: none;
}
</style>
