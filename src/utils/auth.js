function signUp({ username, email, password }) {
  return new Promise((resolve, reject) => {
    resolve({ email: "test@gmail.com" });
  });
}

function signIn({ email, password }) {
  return new Promise((resolve, reject) => {
    resolve({ token: "0505199420241706" });
  });
}

function getUser(token) {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example.com", _id: "fake-id" },
    });
  });
}

export function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85", // I just generated this at random from a mongodb id generator website
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
        _id: "6785882563335c63f01a841b", // I just generated this at random from a mongodb id generator website
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
        _id: "6785882463335c63f01a8419", // I just generated this at random from a mongodb id generator website
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
        _id: "67858d3ec556bd90deae8a0d", // I just generated this at random from a mongodb id generator website
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
  // article is a result from the NewsAPI
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
      url: article,
      url, // Use the properties the newsAPI gives you, I just made these up
      title: article.title,
      imageUrl: article.imagUrl,
      // whatever other properties from the newsAPI-given article object you saved to the database
    });
  });
}

export { signUp, signIn, getUser, saveArticle };
