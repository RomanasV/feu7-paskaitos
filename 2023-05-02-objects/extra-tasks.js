const posts = [
  {
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
  {
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
  },
  {
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  },
  {
    title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
  },
  {
    title: "fugit voluptas sed molestias voluptatem provident",
    body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
  },
  {
    title: "voluptate et itaque vero tempora molestiae",
    body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
  },
  {
    title: "adipisci placeat illum aut reiciendis qui",
    body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
  },
  {
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
  },
  {
    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
  },
  {
    title: "dolor sint quo a velit explicabo quia nam",
    body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
  },
  {
    title: "maxime id vitae nihil numquam",
    body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
  },
  {
    title: "autem hic labore sunt dolores incidunt",
    body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
  },
  {
    title: "rem alias distinctio quo quis",
    body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
  }
];

function addId(arr){
  arr.map((item, index) => {
    item.id = index + 1;
  })
}

addId(posts);

// 7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.
// 7.1. Gauti pirmo masyvo nario reikšmę.
function task71(postsData) {
  // console.log(postsData[0]);
  console.log(postsData.at(0));
}

// task71(posts);

// 7.2. Gauti paskutinio masyvo nario reikšmę.
function task72(postsData) {
  // console.log(postsData[postsData.length - 1]);
  console.log(postsData.at(-1));
}

// task72(posts);

// 7.3. Gauti 15 masyvo nario reikšmę.
function task73(postsData) {
  console.log(postsData);
  // console.log(postsData[14]);
  console.log(postsData.at(14));
}

// task73(posts);

// 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
function task74(postsData, index) {
  console.log(postsData);

  // console.log(postsData[postsData.length - 14]);
  console.log(postsData.at(index));
}

// task74(posts, -13);

// 7.5. Gauti vidurinio masyvo naio reikšmę.
function task75(postsData) {
  let middleIndex = Math.floor(postsData.length / 2);
  let middlePost = postsData[middleIndex];
  console.log(middlePost);
}

// task75(posts);

// 7.6. Gauti pirmų keturių masyvo narių reikšmes.
function task76(postsData) {
  console.log(postsData.slice(0, 4));
}

// task76(posts);

// 7.7. Gauti paskutinių penkių masyvo narių reikšmes.
function task77(postsData) {
  console.log(postsData.slice(-5));
}

// task77(posts);

// 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
function task77(postsData) {
  console.log(postsData);
  console.log(postsData.slice(4, 15));
}

// task77(posts);

// 7.9. Gauti kas antro masyvo nario reikšmes.
function task78(postsData) {
  console.log(postsData);
  // postsData.map((post, index) => {
  //   if (index % 2 === 0) {
  //     console.log(post);
  //   }
  // })

  // for (let i = 0; i < postsData.length; i++) {
  //   if (i % 2 === 0) {
  //     console.log(postsData[i]);
  //   }
  // }

  for (let i = 0; i < postsData.length; i+=2) {
    console.log(postsData[i]);
  }
}

// task78(posts);

// 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.
function task710(postsData) {
  // let firstPost = postsData[0];
  // let lastPost = postsData.at(-1);
  // console.log([firstPost, lastPost]);

  task71(postsData);
  task72(postsData);
}

// task710(posts);

// 7.11. Gauti pirmą masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
function task711(postsData) {
  console.log(postsData[0].title);
}

// task711(posts);

// 7.12. Gauti antrą masyvo narį ir į konsolę išvesti jo property "body" reikšmę.
function task712(postsData) {
  console.log(postsData[1].body);
}

// task712(posts);

// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.
function task713(postsData) {
  let post = postsData[2];
  let title = post.title;
  let body = post.body;

  let output = `Post title is: '${title}' and the content is: '${body}'.`;
  console.log(output)
}

// task713(posts);

// 7.14. Išvesti visus masyvo narius į konsolę.
function task714(postsData) {
  postsData.map(post => {
    console.log(post);
  })
}

// task714(posts);

// 7.15. Išvesti visų masyvo narių property "title" į konsolę.
function task715(postsData) {
  postsData.map(post => {
    console.log(post.title);
  })
}

// task715(posts);

// 7.16. Išvesti visų masyvo narių property "body" į konsolę.
function task716(postsData) {
  postsData.map(post => {
    console.log(post.body);
  })
}

// task716(posts);

// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function task717(postsData) {
  postsData.map(post => {
    let output = `Title: "${post.title}". Content: "${post.body}".`;
    console.log(output);
  })
}

// task717(posts);

// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function task718(postsData) {
  let newPosts = postsData.slice(0, 4);

  // newPosts.map(post => {
  //   let output = `Title: "${post.title}". Content: "${post.body}".`;
  //   console.log(output);
  // })

  task717(newPosts);
}

// task718(posts);

// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".

function task719(postsData) {
  let newPosts = postsData.slice(-7);

  // newPosts.map(post => {
  //   let output = `Title: "${post.title}". Content: "${post.body}".`;
  //   console.log(output);
  // })

  task717(newPosts);
}

// task719(posts);

// 7.20. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" reikšmę, kaip li elementą, išvesti į ul elementą. 
function task720(postsData) {
  let ulElement = document.querySelector('#task-7');

  postsData.map((post) => {
    let liElement = `<li>${post.title}</li>`;
    ulElement.innerHTML += liElement;
  });
}

// task720(posts);

// 7.21. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" ir "body" išvesti tokiu formatu: Title: "post title". Content: "post content".
function task721(postsData) {
  let ulElement = document.querySelector('#task-7');

  postsData.map((post) => {
    let liElement = `<li>Title: "${post.title}". Content: "${post.body}"</li>`;
    ulElement.innerHTML += liElement;
  });
}

// task721(posts);

// 7.22. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas prasideda raide "s".
function task722(postsData) {
  let ulElement = document.querySelector('#task-7');

  // postsData.map((post) => {
  //   // console.log(post.title[0] === 's');
  //   // console.log(post.title.at(0) === 's');
  //   // console.log(post.title.startsWith('s'));

  //   if (post.title.startsWith('s')) {
  //     let liElement = `<li>Title: "${post.title}". Content: "${post.body}"</li>`;
  //     ulElement.innerHTML += liElement;
  //   }
  // });

  let filteredPosts = postsData.filter((post) => post.title.startsWith('s'));

  // filteredPosts.map(post => {
  //   let liElement = `<li>Title: "${post.title}". Content: "${post.body}"</li>`;
  //   ulElement.innerHTML += liElement;
  // })

  renderList(filteredPosts);
}

// task722(posts);

// 7.23. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas baigiasi "t" arba "m".
function task723(postsData) {
  let filteredPosts = postsData.filter((post) => post.title.endsWith('t') || post.title.endsWith('m'));

  renderList(filteredPosts);
}

// task723(posts);

// 7.24. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau simbolių nei 15.
function task724(postsData) {
  let filteredPosts = postsData.filter((post) => post.title.length > 15);

  renderList(filteredPosts);
}

// task724(posts);

// 7.25. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.
function task725(postsData) {
  let filteredPosts = postsData.filter((post) => post.title.length < 20 && post.body.length > 50);

  renderList(filteredPosts);
}

// task725(posts);

// 7.26. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 130 simbolių.
function task726(postsData) {
  let filteredPosts = postsData.filter((post) => (
    post.title.length > 20 && 
    post.title.length < 30 && 
    post.body.length > 70 && 
    post.body.length < 130
  ));

  renderList(filteredPosts);
}

// task726(posts);

// 7.27. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo".
function task727(postsData) {
  let filteredPosts = postsData.filter((post) => post.title.includes('it') && post.body.includes('quo'));

  renderList(filteredPosts);
}

// task727(posts);

// 7.28. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių "body" turi žodį "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.
function task728(postsData) {
  let filteredPosts = postsData.filter((post) => {
    let words = post.body.split(' ');
    return words.includes('sit');
  });

  renderList(filteredPosts);
}

// task728(posts);

// 7.29. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau nei 3 "a" raides, o "body" turi mažiau nei 7 "o" raides.
function task729(postsData) {
  let filteredPosts = postsData.filter((post) => {
    let titleLetters = post.title.split('');
    let bodyLetters = post.body.split('');

    let matchTitleLetters = titleLetters.filter(letter => letter === 'a');
    let matchBodyLetters = bodyLetters.filter(letter => letter === 'o');

    return matchTitleLetters.length > 3 && matchBodyLetters.length < 7;
  });

  renderList(filteredPosts);
}

task729(posts);


function renderList(posts) {
  let ulElement = document.querySelector('#task-7');

  posts.map(post => {
    let liElement = `<li>Title: "${post.title}". Content: "${post.body}"</li>`;
    ulElement.innerHTML += liElement;
  })
}