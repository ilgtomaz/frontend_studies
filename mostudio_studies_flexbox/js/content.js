const galleryElement = [
  {
    image: 'home_photo_1.jpg',
    headTitle: 'portrait',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    title: 'Black & Gold Paint Face'
  },
  {
    image: 'home_photo_2.jpg',
    headTitle: 'nature',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    title: 'Green Leaves'
  },
  {
    image: 'home_photo_3.jpg',
    headTitle: 'nature',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    title: 'Coal'
  },
  {
    image: 'home_photo_4.jpg',
    headTitle: 'nature',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    title: 'Top Leaf'
  },
  {
    image: 'home_photo_5.jpg',
    headTitle: 'portrait',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    title: 'Building'
  },
  {
    image: 'home_photo_6.jpg',
    headTitle: 'fashion',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    title: 'Black Girl Model'
  },
  {
    image: 'home_photo_7.jpg',
    headTitle: 'animals',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    title: 'Pug Puppy'
  },
  {
    image: 'home_photo_8.jpg',
    headTitle: 'nature',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    title: 'White Flower'
  },
  {
    image: 'home_photo_9.jpg',
    headTitle: 'animals',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    title: 'Turtle'
  }
]

function createdViewPortfolioLink() {
  const p = document.createElement('p');
  const aViewPortfolioLink = document.createElement('a');
  aViewPortfolioLink.classList = ['view_portfolio_link'];
  aViewPortfolioLink.href = '#';
  aViewPortfolioLink.append('View Portifolio')
  p.appendChild(aViewPortfolioLink);
  return p;
}