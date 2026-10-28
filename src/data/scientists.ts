export interface Scientist {
  name: string
  known: string
  gradient: string
  image: string
}

export const scientists: Scientist[] = [
  { name: 'Ada Lovelace', known: 'First computer programmer', gradient: 'from-pink-500 to-rose-500', image:"https://i.ibb.co.com/5gjTmhvV/ada-lovelace.avif" },
  { name: 'Alan Turing', known: 'Father of computer science', gradient: 'from-indigo-500 to-blue-500', image:"https://i.ibb.co.com/Df5c21dW/29i273kbby241.webp" },
  { name: 'Grace Hopper', known: 'Pioneer of compilers', gradient: 'from-cyan-500 to-sky-500' , image:"https://i.ibb.co.com/VYtm9Q29/images.jpg"},
  { name: 'Dennis Ritchie', known: 'Creator of C and Unix', gradient: 'from-emerald-500 to-teal-500' , image:"https://i.ibb.co.com/cXhBTwvr/dennis-ritchie.jpg"},
  { name: 'Bjarne Stroustrup', known: 'Creator of C++', gradient: 'from-violet-500 to-purple-500' , image:"https://i.ibb.co.com/MymVb6Bz/stroustrup-pune.png" },
  { name: 'Linus Torvalds', known: 'Creator of Linux and Git', gradient: 'from-amber-500 to-orange-500' , image:"https://i.ibb.co.com/Z6GN1D3x/images-1.jpg"},
  { name: 'Tim Berners-Lee', known: 'Inventor of the World Wide Web', gradient: 'from-blue-500 to-indigo-500' , image:"https://i.ibb.co.com/tNFJZCh/images-2.jpg" },
  { name: 'Margaret Hamilton', known: 'Apollo flight software lead', gradient: 'from-fuchsia-500 to-pink-500' , image:"https://i.ibb.co.com/TDNCN3sZ/Hamilton.jpg"},
  { name: 'Donald Knuth', known: 'The Art of Computer Programming', gradient: 'from-lime-500 to-green-500' , image:"https://i.ibb.co.com/LXfdSSCz/professor-donald-knuth.avif" },
  { name: 'Edsger Dijkstra', known: 'Shortest-path algorithm', gradient: 'from-red-500 to-orange-500' , image:"https://i.ibb.co.com/Kpm3TYCs/images-3.jpg"},
  { name: 'Claude Shannon', known: 'Father of information theory', gradient: 'from-teal-500 to-cyan-500' , image:"https://i.ibb.co.com/355bfwyL/Inform-Theory-75-Blog-Lead-art-op2.jpg" },
  { name: 'John von Neumann', known: 'Stored-program architecture', gradient: 'from-purple-500 to-indigo-500' , image:"https://i.ibb.co.com/9FT6MGJ/Qian-Nirenberg-John-von-Neumann-illo.avif"},
  { name: 'Geoffrey Hinton', known: 'Deep learning pioneer', gradient: 'from-sky-500 to-violet-500' , image:"https://i.ibb.co.com/Zp2ZMbws/FBBVA-16-tic-hinton.jpg"},
  { name: 'Yann LeCun', known: 'Convolutional neural networks', gradient: 'from-orange-500 to-rose-500' , image:"https://i.ibb.co.com/xKJqmVQG/images-4.jpg"},
]

export function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
}
