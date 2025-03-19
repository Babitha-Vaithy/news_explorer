function signUp({ username, email, password }) {
  console.log(`${username} , ${email} , ${password}`);
  return new Promise((resolve) => {
    resolve({ email: "test@gmail.com" });
  });
}

function signIn({ email, password }) {
  console.log(`${email} , ${password}`);
  return new Promise((resolve) => {
    resolve({ token: "0505199420241706" });
  });
}

function getUser(token) {
  console.log(`${token}`);
  return new Promise((resolve) => {
    resolve({
      data: { name: "fake user", email: "fake@example.com", _id: "fake-id" },
    });
  });
}

export function getItems() {
  return new Promise((resolve) =>
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85", 
        title: "Are You Worried About A.I. Taking Human Jobs?",
        urlToImage:
          "https://static01.nyt.com/images/2025/02/04/opinion/04azaria-promo-still/04azaria-promo-still-superJumbo.jpg?quality=75&auto=webp",
        publishedAt: "February 07, 2025",
        description:
          " imagine that soon enough, artificial intelligence will be able to recreate the sounds of the more than 100 voices I created for characters on “The Simpsons” over almost four decades.",
        author: "Jeremy Engle",
        keyword: "AI",
      },
      {
        _id: "6785882563335c63f01a841b", 
        title:
          "What Teens Are Saying About Barring Children Under 16 From Social Media",
        urlToImage:
          "https://static01.nyt.com/images/2024/11/27/multimedia/27oz-socialmedia-01-kqfg/27oz-socialmedia-01-kqfg-superJumbo.jpg?quality=75&auto=webp",
        publishedAt: "January 16, 2025",
        description:
          "In November last year, Australia imposed a sweeping ban on social media for children under 16. It is one of the world’s most comprehensive measures aimed at safeguarding young people from potential hazards online, such as online hate or bullying.",
        author: "The Learning Network",
        keyword: "Social Media",
      },
      {
        _id: "6785882463335c63f01a8419", 
        title: "Are Youth Sports Too Stressful? Teenagers Weigh In.",
        urlToImage:
          "https://static01.nyt.com/images/2024/12/19/multimedia/19doncic-youthbasketball-1-kvmj/19doncic-youthbasketball-1-kvmj-superJumbo.jpg?quality=75&auto=webp",
        publishedAt: "February 06, 2025",
        description:
          "That’s the question that led Luka Doncic, one of the N.B.A.’s brightest stars, to start a foundation dedicated to helping young players embrace “mess and joy.",
        author: "The Learning Network",
        keyword: "Sports",
      },
      {
        _id: "67858d3ec556bd90deae8a0d", 
        title:
          "Should Social Media Companies Be Responsible for Fact-Checking Their Sites?",
        urlToImage:
          "https://static01.nyt.com/images/2025/01/08/multimedia/08themorning-nl-META-01-vhfj/08themorning-nl-META-01-vhfj-superJumbo.jpg?quality=75&auto=webp",
        publishedAt: "January 14, 2025",
        description:
          "Meta — the company that owns Facebook, Instagram, Threads and Whatsapp — announced on Jan. 7 that it would be ending its longstanding fact-checking program, a policy instituted to curtail the spread of misinformation across its social media apps.",
        author: "Natalie Proulx",
        keyword: "Social Media",
      },
    ])
  );
}

function saveArticle(article) {
  return new Promise((resolve) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0",
      url: article.url,
      title: article.title,
      imageUrl: article.imagUrl,
    });
  });
}

export { signUp, signIn, getUser, saveArticle };
