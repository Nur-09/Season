let month = document.getElementById('month');

// WINTER
let winter = document.getElementById('winter');
winter.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/winter-sunset-with-snow-ground-lake_889227-24873.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';

    month.innerHTML = '';


    month.innerHTML = `
        <div class="month timeofyear" style="background-color: rgb(0, 149, 255);">December</div>
        <div class="month timeofyear" style="background-color: rgb(0, 149, 255);">January</div>
        <div class="month timeofyear" style="background-color: rgb(0, 149, 255);">February</div>
    `;
});

// SPRING
let spring = document.getElementById('spring');
spring.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0778/2679/files/flowers_spring_1024x1024.jpg?v=1584303872')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';

    month.innerHTML = '';

    month.innerHTML = `
        <div class="month timeofyear" style="background-color: green;">March</div>
        <div class="month timeofyear" style="background-color: green;">April</div>
        <div class="month timeofyear" style="background-color: green;">May</div>
    `;
});

// SUMMER
let summer = document.getElementById('summer');
summer.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('https://lifestylesafter50.com/wp-content/uploads/sites/3/2022/05/beach-2836300_1280.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';

    month.innerHTML = '';

    month.innerHTML = `
        <div class="month timeofyear" style="background-color: rgb(242, 238, 4);">June</div>
        <div class="month timeofyear" style="background-color: rgb(242, 238, 4);">July</div>
        <div class="month timeofyear" style="background-color: rgb(242, 238, 4);">August</div>
    `;
});

// AUTUMN
let autumn = document.getElementById('autumn');
autumn.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/thumbnails/024/179/654/small_2x/a-beautiful-long-road-in-autumn-season-is-lined-with-trees-bearing-colorful-leaves-ai-generative-photo.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';

    month.innerHTML = '';

    month.innerHTML = `
        <div class="month timeofyear" style="background-color: orange;">September</div>
        <div class="month timeofyear" style="background-color: orange;">October</div>
        <div class="month timeofyear" style="background-color: orange;">November</div>
    `;
});
