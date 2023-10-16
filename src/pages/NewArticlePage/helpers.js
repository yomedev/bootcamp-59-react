export function getRandomIndex() {
  return Math.floor(Math.random() * 10);
}

const articles = [
  {
    publishedAt: "2023-04-05T00:22:41.348Z",
    author: "Michelle Barrows III",
    title:
      "Accusantium laborum iusto perferendis eligendi. Quia error nam animi harum quod id. Et repellat tempore dolorem tenetur. Eveniet atque possimus sequi accusamus nostrum autem autem quisquam. Dolorum quia modi rem a sequi.",
    urlToImage:
      "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    content:
      "Quod ipsam at.\nDicta reprehenderit dolorem ea dolor ipsa accusantium voluptatibus.\nSaepe perferendis iure repudiandae ab voluptas natus laudantium.\nVero corporis repellendus voluptatum.",
    id: "1",
  },
  {
    publishedAt: "2023-04-05T08:46:59.429Z",
    author: "Kristin Daugherty",
    title:
      "Consequatur hic veniam beatae. Facere delectus eum facere reiciendis asperiores quisquam itaque accusamus. Placeat voluptatum dignissimos aperiam assumenda qui pariatur at fuga.",
    urlToImage:
      "https://images.unsplash.com/photo-1527600478564-488952effedb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    content: "Minima at quia deserunt.",
    id: "2",
  },
  {
    publishedAt: "2023-04-05T03:27:49.673Z",
    author: "Shannon Schroeder V",
    title:
      "Officiis accusamus voluptatibus veritatis vero nam. Ratione incidunt blanditiis rem distinctio repellat. Sequi possimus alias omnis qui atque alias sequi adipisci. Animi voluptates ipsa occaecati numquam cupiditate ipsam.",
    urlToImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    content:
      "Voluptatem at expedita.\nIllo vitae exercitationem hic perferendis reprehenderit facilis nemo maiores facere.\nNeque reiciendis esse nesciunt voluptas provident repudiandae voluptatum cupiditate.\nVelit nostrum repellendus numquam repudiandae.\nFacere dolore ab magnam eaque consectetur.",
    id: "3",
  },
  {
    publishedAt: "2023-04-05T15:33:11.216Z",
    author: "Helen Mitchell",
    title:
      "Sint commodi ducimus. Animi temporibus ipsa. Alias esse nisi ut perferendis nam.",
    urlToImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    content:
      "Officia alias fugiat hic est fugit quasi necessitatibus a.\nMagnam deleniti minima vero labore aliquam.",
    id: "4",
  },
  {
    publishedAt: "2023-04-05T04:44:15.080Z",
    author: "Salvatore Fay",
    title:
      "Beatae ex delectus quis quae. Maiores accusamus enim ea odit unde quidem quos voluptas. Et id molestiae quos officiis fuga iure optio numquam ab. Iusto sed molestiae culpa sed.",
    urlToImage:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    content:
      "Quia officia ratione.\nMaiores consequuntur accusamus magnam ex eius voluptatem doloremque explicabo nostrum.",
    id: "5",
  },
  {
    publishedAt: "2023-04-05T14:19:27.436Z",
    author: "Mr. Jeanne Kunde",
    title:
      "Debitis voluptate dolorem. Ipsum vitae eveniet labore asperiores. Autem consequatur error.",
    urlToImage:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    content:
      "Aperiam iste occaecati autem inventore.\nInventore facilis quae.\nNostrum tempore voluptatem quisquam tempora.",
    id: "6",
  },
  {
    publishedAt: "2023-04-04T21:40:25.908Z",
    author: "Irving Fahey V",
    title:
      "Suscipit voluptates optio sapiente. Et numquam soluta amet incidunt quas. Quod labore corrupti ab officiis nostrum voluptas qui.",
    urlToImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    content:
      "Eius consequatur non hic odio accusamus aliquam consectetur quaerat.\nImpedit fugit inventore aut tempora quasi.\nPerspiciatis ut numquam magnam quos voluptatem maiores aliquid at.",
    id: "7",
  },
  {
    publishedAt: "2023-04-05T01:29:09.149Z",
    author: "Cheryl Rice",
    title:
      "Optio qui numquam dicta. Neque officia quaerat deleniti enim ut corporis sit quod. Repellendus rem consectetur iure.",
    urlToImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    content: "Sed inventore ipsa similique tempore ab sit.",
    id: "8",
  },
  {
    publishedAt: "2023-04-05T17:38:35.343Z",
    author: "Cathy Jacobs",
    title:
      "Odit repudiandae quibusdam quis commodi dolorem est nisi. Vitae assumenda esse natus molestias. Vel inventore cupiditate facilis perspiciatis natus asperiores tempora non consequatur. Repudiandae culpa perferendis enim repellat deserunt.",
    urlToImage:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    content:
      "Eum reprehenderit atque sit.\nVero pariatur ea nam perferendis eveniet laudantium corporis distinctio.",
    id: "9",
  },
  {
    publishedAt: "2023-04-05T15:47:59.144Z",
    author: "Laura Keebler",
    title:
      "Ipsam quas labore culpa ratione earum. Doloribus ullam deleniti aspernatur repudiandae expedita non suscipit repellendus. Doloremque quasi consequatur dolore necessitatibus sunt natus officia odio adipisci. Pariatur aut harum. Quidem asperiores explicabo in. Ratione odit aliquid.",
    urlToImage:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",
    content: "Laborum modi odit modi.\nHic deleniti velit odio quas.",
    id: "10",
  },
];

export const getArticleInfo = () => {
  return {
    publishedAt: articles[getRandomIndex()].publishedAt,
    author: articles[getRandomIndex()].author,
    title: articles[getRandomIndex()].title,
    urlToImage: articles[getRandomIndex()].urlToImage,
    content: articles[getRandomIndex()].content,
  };
};