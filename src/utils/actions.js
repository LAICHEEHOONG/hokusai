"use server";

export async function getArticles() {
  try {
    const getArticles = await fetch(`${process.env.JSON_API}/articles`);
    const articles = await getArticles.json();

    if (Object.keys(articles).length === 0) {
      throw new Error("We could not find any articles");
    }

    return articles;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getArticlesById(id) {
  try {
    const getArticles = await fetch(`${process.env.JSON_API}/articles/${id}`);
    // const article = await getArticles.json();

    // if (Object.keys(article).length === 0) {
    //   throw new Error("We could not find the article");
    // }



    // if (Object.keys(getArticles).length === 0) {
    //   throw new Error("We could not find the article");
    // }

    const article = await getArticles.json();

    return article;
  } catch (error) {
    throw new Error(error.message);
  }
}


//https://udmy-next-24-jserv-nu.vercel.app/