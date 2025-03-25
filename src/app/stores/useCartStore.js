import { create } from 'zustand';

const useCartStore = create((set,get) => ({

data:[
  {
    id: 1,
    title: "Title",
    price: "1000",
    image:'/content2.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 2,
    title: "Title",
    image:'/content1.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 3,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/content2.jpg',
    category: "living",
    productType: "chairs",
  },
  {
    id: 4,
    title: "Title",
    price: "1000",
    image:'/content1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 5,
    title: "Title",
    price: "1000",
    image:'/content2.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 6,
    title: "Title",
    price: "1000",
    image:'/content1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  }],
products:{ 
  sofas:[
    {
      id: 111,
      title: "Title",
      price: "1000",
      image:'/sofas/sofa10.jpg',
      description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
      category: "living",
      productType: "sofas",
    },
    {
      id: 222,
      title: "Title",
      image:'/sofas/sofa2.jpg',
      price: "1000",
      description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
      category: "living",
      productType: "sofas",
    },
    {
      id:333,
      title: "Title",
      price: "1000",
      description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
      image:'/sofas/sofa3.jpg',
      category: "living",
      productType: "sofas",
    },
    {
      id: 444,
      title: "Title",
      price: "1000",
      image:'/sofas/sofa8.jpg',
      description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
      category: "living",
      productType: "sofas",
    },
    {
      id: 555,
      title: "Title",
      price: "1000",
      image:'/sofas/sofa5.jpg',
      description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
      category: "living",
      productType: "sofas",
    },
    {
      id: 666,
      title: "Title",
      price: "1000",
      image:'/sofas/sofa9.jpg',
      description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
      category: "living",
      productType: "sofas",
    },
],
diningChairs:[
  {
    id: 1111,
    title: "Title",
    price: "1000",
    image:'/dining-chairs/diningchair1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "chair",
  },
  {
    id: 2222,
    title: "Title",
    image:'/dining-chairs/diningchair6.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "chair",
  },
  {
    id:3333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/dining-chairs/diningchair3.jpg',
    category: "dining",
    productType: "chair",
  },
  {
    id: 4444,
    title: "Title",
    price: "1000",
    image:'/dining-chairs/dainingchair2.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "chair",
  },
  {
    id: 5555,
    title: "Title",
    price: "1000",
    image:'/dining-chairs/diningchair5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "chair",
  },
  {
    id: 6666,
    title: "Title",
    price: "1000",
    image:'/dining-chairs/dainingchair4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "chair",
  },
],
beds:[
  {
    id: 11111,
    title: "Title",
    price: "1000",
    image:'/beds/bed1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "bed",
  },
  {
    id: 22222,
    title: "Title",
    image:'/beds/bed2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "bed",
  },
  {
    id:33333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/beds/bed3.jpg',
    category: "bedroom",
    productType: "bed",
  },
  {
    id: 44444,
    title: "Title",
    price: "1000",
    image:'/beds/bed4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "bed",
  },
  {
    id: 55555,
    title: "Title",
    price: "1000",
    image:'/beds/bed5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "bed",
  },
  {
    id: 66666,
    title: "Title",
    price: "1000",
    image:'/beds/bed6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "bed",
  },
],
chairs:[
  {
    id: 111111,
    title: "Title",
    price: "1000",
    image:'/chairs/chair1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 222222,
    title: "Title",
    image:'/chairs/chair2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
  {
    id:333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/chairs/chair3.jpg',
    category: "living",
    productType: "chairs",
  },
  {
    id: 444444,
    title: "Title",
    price: "1000",
    image:'/chairs/chair4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 555555,
    title: "Title",
    price: "1000",
    image:'/chairs/chair5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 666666,
    title: "Title",
    price: "1000",
    image:'/chairs/chair6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
],
coffeeTables:[
  {
    id: 1111111,
    title: "Title",
    price: "1000",
    image:'/coffee-tables/ctable1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id: 2222222,
    title: "Title",
    image:'/coffee-tables/ctable2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id:3333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/coffee-tables/ctable3.jpg',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id: 4444444,
    title: "Title",
    price: "1000",
    image:'/coffee-tables/ctable4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id: 5555555,
    title: "Title",
    price: "1000",
    image:'/coffee-tables/ctable5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id: 6666666,
    title: "Title",
    price: "1000",
    image:'/coffee-tables/ctable6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "coffee-tables",
  },
],
nightstands:[
  {
    id: 11111111,
    title: "Title",
    price: "1000",
    image:'/nightstands/nstand1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "nighstand"
  },
  {
    id: 22222222,
    title: "Title",
    image:'/nightstands/nstand2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "nighstand"
  },
  {
    id:33333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/nightstands/nstand3.jpg',
    category: "bedroom",
    productType: "nighstand"
  },
  {
    id: 44444444,
    title: "Title",
    price: "1000",
    image:'/nightstands/nstand4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "nighstand"
  },
  {
    id: 55555555,
    title: "Title",
    price: "1000",
    image:'/nightstands/nstand5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "nighstand"
  },
  {
    id: 66666666,
    title: "Title",
    price: "1000",
    image:'/nightstands/nstand6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "nighstand"
  },
],
diningTables:[
  {
    id: 11111111,
    title: "Title",
    price: "1000",
    image:'/dining-tables/dtable1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "table"
  },
  {
    id: 22222222,
    title: "Title",
    image:'/dining-tables/dtable2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "table"
  },
  {
    id:33333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/dining-tables/dtable3.jpg',
     category: "dining",
    productType: "table"
  },
  {
    id: 44444444,
    title: "Title",
    price: "1000",
    image:'/dining-tables/dtable4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "table"
  },
  {
    id: 55555555,
    title: "Title",
    price: "1000",
    image:'/dining-tables/dtable5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "table"
  },
  {
    id: 66666666,
    title: "Title",
    price: "1000",
    image:'/dining-tables/dtable6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "table"
  },
],
sideBoards:[
  {
    id: 111111111,
    title: "Title",
    price: "1000",
    image:'/sideboards/sideboard1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "sideboards"
  },
  {
    id: 222222222,
    title: "Title",
    image:'/sideboards/sideboard2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "sideboards"
  },
  {
    id:333333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/sideboards/sideboard3.jpg',
     category: "dining",
    productType: "sideboards"
  },
  {
    id: 444444444,
    title: "Title",
    price: "1000",
    image:'/sideboards/sideboard4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "sideboards"
  },
  {
    id: 555555555,
    title: "Title",
    price: "1000",
    image:'/sideboards/sideboard5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "sideboards"
  },
  {
    id: 666666666,
    title: "Title",
    price: "1000",
    image:'/sideboards/sideboard6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "sideboards"
  },
],
sideTables:[
  {
    id: 1111111111,
    title: "Title",
    price: "1000",
    image:'/sidetables/stable1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "sidetables"
  },
  {
    id: 2222222222,
    title: "Title",
    image:'/sidetables/stable2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "sidetables"
  },
  {
    id:3333333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/sidetables/stable3.jpg',
    category: "living",
    productType: "sidetables"
  },
  {
    id: 4444444444,
    title: "Title",
    price: "1000",
    image:'/sidetables/stable4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "sidetables"
  },
  {
    id: 5555555555,
    title: "Title",
    price: "1000",
    image:'/sidetables/stable5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "sidetables"
  },
  {
    id: 6666666666,
    title: "Title",
    price: "1000",
    image:'/sidetables/stable6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "sidetables"
  },
],
newArrivals:[
  {
    id: 11111111111,
    title: "Title",
    price: "1000",
    image:'/sidetables/stable1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "sidetables"
  },
  {
    id: 22222222222,
    title: "Title",
    image:'/coffee-tables/ctable4.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "sidetables"
  },
  {
    id:33333333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/chairs/chair5.jpg',
    category: "living",
    productType: "sidetables"
  },
  {
    id: 44444444444,
    title: "Title",
    price: "1000",
    image:'/dining-tables/dtable4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "sidetables"
  },
  {
    id: 55555555555,
    title: "Title",
    price: "1000",
    image:'/sofas/sofa9.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "sidetables"
  },
  {
    id: 66666666666,
    title: "Title",
    price: "1000",
    image:'/nightstands/nstand3.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "sidetables"
  },
],

},
sofas:[
    {
      id: 111,
      title: "Title",
      price: "1000",
      image:'/sofas/sofa10.jpg',
      description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
      category: "living",
      productType: "sofas",
    },
    {
      id: 222,
      title: "Title",
      image:'/sofas/sofa2.jpg',
      price: "1000",
      description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
      category: "living",
      productType: "sofas",
    },
    {
      id:333,
      title: "Title",
      price: "1000",
      description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
      image:'/sofas/sofa3.jpg',
      category: "living",
      productType: "sofas",
    },
    {
      id: 444,
      title: "Title",
      price: "1000",
      image:'/sofas/sofa8.jpg',
      description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
      category: "living",
      productType: "sofas",
    },
    {
      id: 555,
      title: "Title",
      price: "1000",
      image:'/sofas/sofa5.jpg',
      description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
      category: "living",
      productType: "sofas",
    },
    {
      id: 666,
      title: "Title",
      price: "1000",
      image:'/sofas/sofa9.jpg',
      description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
      category: "living",
      productType: "sofas",
    },
],
diningChairs:[
  {
    id: 1111,
    title: "Title",
    price: "1000",
    image:'/dining-chairs/diningchair1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "dining-chairs",
  },
  {
    id: 2222,
    title: "Title",
    image:'/dining-chairs/diningchair6.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "dining-chairs",
  },
  {
    id:3333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/dining-chairs/diningchair3.jpg',
    category: "dining",
    productType: "dining-chairs",
  },
  {
    id: 4444,
    title: "Title",
    price: "1000",
    image:'/dining-chairs/dainingchair2.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "dining-chairs",
  },
  {
    id: 5555,
    title: "Title",
    price: "1000",
    image:'/dining-chairs/diningchair5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "dining-chairs",
  },
  {
    id: 6666,
    title: "Title",
    price: "1000",
    image:'/dining-chairs/dainingchair4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "dining-chairs",
  },
],
beds:[
  {
    id: 11111,
    title: "Title",
    price: "1000",
    image:'/beds/bed1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "beds",
  },
  {
    id: 22222,
    title: "Title",
    image:'/beds/bed2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "beds",
  },
  {
    id:33333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/beds/bed3.jpg',
    category: "bedroom",
    productType: "beds",
  },
  {
    id: 44444,
    title: "Title",
    price: "1000",
    image:'/beds/bed4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "beds",
  },
  {
    id: 55555,
    title: "Title",
    price: "1000",
    image:'/beds/bed5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "beds",
  },
  {
    id: 66666,
    title: "Title",
    price: "1000",
    image:'/beds/bed6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "beds",
  },
],
chairs:[
  {
    id: 111111,
    title: "Title",
    price: "1000",
    image:'/chairs/chair1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 222222,
    title: "Title",
    image:'/chairs/chair2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
  {
    id:333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/chairs/chair3.jpg',
    category: "living",
    productType: "chairs",
  },
  {
    id: 444444,
    title: "Title",
    price: "1000",
    image:'/chairs/chair4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 555555,
    title: "Title",
    price: "1000",
    image:'/chairs/chair5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 666666,
    title: "Title",
    price: "1000",
    image:'/chairs/chair6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "chairs",
  },
],
coffeeTables:[
  {
    id: 1111111,
    title: "Title",
    price: "1000",
    image:'/coffee-tables/ctable1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id: 2222222,
    title: "Title",
    image:'/coffee-tables/ctable2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id:3333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/coffee-tables/ctable3.jpg',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id: 4444444,
    title: "Title",
    price: "1000",
    image:'/coffee-tables/ctable4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id: 5555555,
    title: "Title",
    price: "1000",
    image:'/coffee-tables/ctable5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id: 6666666,
    title: "Title",
    price: "1000",
    image:'/coffee-tables/ctable6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "coffee-tables",
  },
],
nightstands:[
  {
    id: 11111111,
    title: "Title",
    price: "1000",
    image:'/nightstands/nstand1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "nightstands"
  },
  {
    id: 22222222,
    title: "Title",
    image:'/nightstands/nstand2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "nightstands"
  },
  {
    id:33333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/nightstands/nstand3.jpg',
    category: "bedroom",
    productType: "nightstands"
  },
  {
    id: 44444444,
    title: "Title",
    price: "1000",
    image:'/nightstands/nstand4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "nightstands"
  },
  {
    id: 55555555,
    title: "Title",
    price: "1000",
    image:'/nightstands/nstand5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "nightstands"
  },
  {
    id: 66666666,
    title: "Title",
    price: "1000",
    image:'/nightstands/nstand6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "bedroom",
    productType: "nightstands"
  },
],
diningTables:[
  {
    id: 11111111,
    title: "Title",
    price: "1000",
    image:'/dining-tables/dtable1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "dining-tables"
  },
  {
    id: 22222222,
    title: "Title",
    image:'/dining-tables/dtable2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "dining-tables"
  },
  {
    id:33333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/dining-tables/dtable3.jpg',
     category: "dining",
    productType: "dining-tables"
  },
  {
    id: 44444444,
    title: "Title",
    price: "1000",
    image:'/dining-tables/dtable4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "dining-tables"
  },
  {
    id: 55555555,
    title: "Title",
    price: "1000",
    image:'/dining-tables/dtable5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "dining-tables"
  },
  {
    id: 66666666,
    title: "Title",
    price: "1000",
    image:'/dining-tables/dtable6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "dining-tables"
  },
],
sideBoards:[
  {
    id: 111111111,
    title: "Title",
    price: "1000",
    image:'/sideboards/sideboard1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "sideboards"
  },
  {
    id: 222222222,
    title: "Title",
    image:'/sideboards/sideboard2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "sideboards"
  },
  {
    id:333333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/sideboards/sideboard3.jpg',
     category: "dining",
    productType: "sideboards"
  },
  {
    id: 444444444,
    title: "Title",
    price: "1000",
    image:'/sideboards/sideboard4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "sideboards"
  },
  {
    id: 555555555,
    title: "Title",
    price: "1000",
    image:'/sideboards/sideboard5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "sideboards"
  },
  {
    id: 666666666,
    title: "Title",
    price: "1000",
    image:'/sideboards/sideboard6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "dining",
    productType: "sideboards"
  },
],
sideTables:[
  {
    id: 1111111111,
    title: "Title",
    price: "1000",
    image:'/sidetables/stable1.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "sidetables"
  },
  {
    id: 2222222222,
    title: "Title",
    image:'/sidetables/stable2.jpg',
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "side-tables"
  },
  {
    id:3333333333,
    title: "Title",
    price: "1000",
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    image:'/sidetables/stable3.jpg',
    category: "living",
    productType: "side-tables"
  },
  {
    id: 4444444444,
    title: "Title",
    price: "1000",
    image:'/sidetables/stable4.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "side-tables"
  },
  {
    id: 5555555555,
    title: "Title",
    price: "1000",
    image:'/sidetables/stable5.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "side-tables"
  },
  {
    id: 6666666666,
    title: "Title",
    price: "1000",
    image:'/sidetables/stable6.jpg',
    description:'Esse cupidatat exercitation voluptate occaecat ullamco sint aute magna officia. Adipisicing occaecat qui incididunt consequat velit eu cupidatat. Nisi in ex officia aliqua. Nulla elit pariatur magna deserunt amet aliqua nostrud aliquip elit Lorem anim aliqua voluptate. Et deserunt voluptate aliquip est ipsum ut culpa eiusmod in do nulla sint duis.',
    category: "living",
    productType: "side-tables"
  },
],
  messages : [],
  cartItems: [],
  totalQuantity: 0,
  itemQuantity : 0,
  isOpen: false,
  shippingCost: 20, // Example fixed shipping cost


    addToCart: (item) => set((state) => {
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id );
      if (existingItem) {
        const updatedCartItems = state.cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 }: cartItem );
        return { cartItems: updatedCartItems };
      } else {
        return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }
    }),

    removeItemFromCart: (id) => set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => !(item.id === id )
      ),
    })),
  
   quantity: (id) => set((state) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 }: item );
      return { cartItems: updatedCartItems };
    }),
    
    increaseQuantity: (id) => set((state) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { cartItems: updatedCartItems };
    }),
    decreaseQuantity: (id) => set((state) => {
      const item = state.cartItems.find((item) => item.id === id);
      if (!item) return {};
      if (item.quantity <= 1) {
        return { cartItems: state.cartItems.filter((item) => !(item.id === id )) };
      } else {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === id 
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return { cartItems: updatedCartItems };
      }
    }),
 
    getItemQuantity: (id) => {
      const item = get().cartItems.find((item) => item.id === id );
      return item ? item.quantity : 0;
    },
    //calc only product total cost
    cartSubTotalBalance: () => {
      return get().cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
     // Computed state: calculates the total cart balance dynamically including shipping and any aplliable fees
    cartTotalBalance: () => {
      return get().cartItems.reduce((total, item) => total + get().shippingCost + item.price * item.quantity, 0);
    },
  openCartDrawer: () => set({ isOpen: true }),
  closeCartDrawer: () => set({ isOpen: false }),
}));

export default useCartStore;