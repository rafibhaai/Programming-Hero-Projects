const loadRetroDefault = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const retro = data.posts;
  displayRetro(retro);
};
loadRetroDefault();

const loadRetro = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`
  );
  const data = await res.json();
  const retro = data.posts;
  displayRetro(retro);
};

const displayRetro = (retro) => {
  const retroContainer = document.getElementById("retro-card-container");
  retroContainer.textContent = "";
  let color = "";
  setTimeout(() => {
    retro.forEach((i) => {
      if (i.isActive) {
        color = "green";
      } else {
        color = "red";
      }

      // Creating a div
      const retroCard = document.createElement("div");
      retroCard.classList = `pt-4`;
      retroCard.innerHTML = `
            <div class=" bg-gray-200 rounded-3xl text-[#12132D] ">
            <!-- Left Div -->
                <div class="flex">
                    <div class="flex justify-center items-center w-[60px] h-[60px]  m-2 p-4 rounded-2xl mt-6">
                    <img class=" rounded-2xl w-full h-full" src="${
                      i.image
                    }" alt="">

                        <i  class="fa-solid rounded-[50%] fa-circle text-[${color}]"></i>
                    </div>
                    <div class="w-full">
                        <div class="flex gap-6 pt-8">
                            <p class="text-sm font-medium font-mulish">#${
                              i.category
                            }</p> <br> &nbsp;
                            <p class="text-sm font-medium font-mulish">Author : ${
                              i.author.name
                            }</p>
                        </div>
                    
                        <div class="pr-2">
                            <h4 class="text-2xl font-mulish font-bold">${
                              i.title
                            }</h4>
                            <br>
                            <p class="text-base font-mulish font-normal w-3/4">${
                              i.description
                            }</p>
                            <br>
                            <hr style="border-top: dotted 1px;" />
                        </div>
                    
                    </div>
    
                </div>
                <div class="flex justify-between pt-4">
                    <div class="flex gap-6 pl-16">
                        <span class="text-base font-mulish font-normal" ><i class="fa-solid fa-message"></i> ${
                          i.comment_count
                        }</span>  
                        <span class="text-base font-mulish font-normal" ><i class="fa-regular fa-eye"></i>${
                          i.view_count
                        }</span>
                        <span class="text-base font-mulish font-normal" ><i class="fa-regular fa-clock"> </i> ${
                          i.posted_time
                        } Min</span>
                    </div>
                    <div class="pb-6 pr-6">
                        <button onclick="clickMe('${i.title.replace(
                          "'",
                          " "
                        )}','${
        i.view_count
      }')" class="btn bg-[#10B981] rounded-[50%]"><i class="fa-regular fa-envelope"></i></button>
                    </div>
                </div>
        
    
            </div> 
            `;
      retroContainer.appendChild(retroCard);
    });
    // Hide Loading Spinner
    loadingSpinner(false);
  }, 2000);
};

const loadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};
// Handler
const handleSearch = () => {
  loadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  // loadDataForSearch();
  loadRetro(searchText);
};

const clickMe = async (title, view) => {
  const infoContainer = document.getElementById("selected-info");
  const currentInfoText = infoContainer.innerText;
  const CurrentText = parseInt(currentInfoText);
  const newInfo = CurrentText + 1;
  infoContainer.innerText = newInfo;
  const rightCardContainer = document.getElementById("right-card-id");

  // Load Single Data

  const rightCard = document.createElement("div");
  rightCard.classList = `flex justify-between border mt-6 bg-white rounded-2xl p-4`;
  rightCard.innerHTML = `
    <div class="w-[70%]">
        <p class="text-base font-mulish font-semibold text-[#12132D] ">${title}</p>
    </div>
    <div>
        <span class="text-[#12132D] text-base font-mulish font-normal"><i class="fa-regular fa-eye "></i>${view}</span>
    </div>
    `;
  rightCardContainer.appendChild(rightCard);
};

const loadCard = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  const card = data;
  // console.log(card);
  displayCard(card);
};
loadCard();

const displayCard = (card) => {
  const dicussCardContainer = document.getElementById("discuss-id");
  card.forEach((i) => {
    console.log(i);
    // console.log(i.title)
    const dissCard = document.createElement("div");
    dissCard.classList = `rounded-2xl`;
    dissCard.innerHTML = `

        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
            <img src="${i.cover_image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="p-6">
                <div class="flex pl-4 pb-6">
                    <span><i class="fa-regular fa-calendar-days fa-sm"></i></span>
                    <p class="pl-2 text-sm font-normal font-mulish ">${
                      i.author?.posted_date || "No Publish Date"
                    }</p>
                </div>
        
                <div>
                    <h4 class="text-2xl font-mulish font-bold">${i.title}</h4>
                    <br>
                    <p class="text-base font-mulish font-normal ">${
                      i.description
                    }</p>
                    <br>
                </div>

                <div class="flex gap-4">
                    <div class="w-[44px] h-[44px]"><img class="rounded-full" src="${
                      i.profile_image
                    }" alt=""></div>
                    <div>
                        <p class="text-base font-mulish font-bold">${
                          i.author.name
                        }</p>
                        <p class="text-sm font-mulish font-normal">${
                          i.author?.designation || "Unknown"
                        }</p>
                    
                    </div>
                </div>
        
            </div>
        </div>  
        `;
    dicussCardContainer.appendChild(dissCard);
  });
};
