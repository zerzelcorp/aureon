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
      title: "Chesterfield Noir",
      price: "1000",
      image:'/sofas/sofa10.jpg',
      description:'A timeless classic with deep button-tufted leather and rolled arms, perfect for adding sophistication to any space.',
      category: "living",
      productType: "sofas",
    },
    {
      id: 222,
      title: "Oslo Curved Sofa",
      image:'/sofas/sofa2.jpg',
      price: "1000",
      description:'With its sculptural silhouette and plush fabric, the Oslo offers modern elegance and cloud-like comfort.',
      category: "living",
      productType: "sofas",
    },
    {
      id:333,
      title: "Ivory Cloud Sofa",
      price: "1000",
      description:'This softly curved design in creamy upholstery brings warmth and coziness with a luxe contemporary flair.',
      image:'/sofas/sofa3.jpg',
      category: "living",
      productType: "sofas",
    },
    {
      id: 444,
      title: "Milano Leather Sofa",
      price: "1000",
      image:'/sofas/sofa8.jpg',
      description:'Sleek lines, deep cushions, and top-grain leather define this modern piece made for both comfort and style.',
      category: "living",
      productType: "sofas",
    },
    {
      id: 555,
      title: "Gatsby Velvet Sofa",
      price: "1000",
      image:'/sofas/sofa5.jpg',
      description:'A bold, velvet twist on the Chesterfield — regal, inviting, and ideal for luxe interiors.',
      category: "living",
      productType: "sofas",
    },
    {
      id: 666,
      title: "Emerald Chester Sofa",
      price: "1000",
      image:'/sofas/sofa9.jpg',
      description:'This deep green masterpiece merges vintage charm with modern prestige, crafted to anchor any refined living area.',
      category: "living",
      productType: "sofas",
    },
],
diningChairs:[
  {
    id: 1111,
    title: "Luna Chair",
    price: "1000",
    image:'/dining-chairs/diningchair1.jpg',
    description:'A modern blend of comfort and elegance with smooth curves and a warm wood frame, perfect for minimalist interiors.',
    category: "dining",
    productType: "dining-chairs",
  },
  {
    id: 2222,
    title: "Noir Duo Chairs",
    image:'/dining-chairs/diningchair6.jpg',
    price: "1000",
    description:'Sleek and contemporary, these black leatherette chairs offer a bold contrast and ergonomic support for refined dining spaces.',
    category: "dining",
    productType: "dining-chairs",
  },
  {
    id:3333,
    title: "Terra Armchair",
    price: "1000",
    description:'Wrapped in vintage cognac leather, this chair adds rustic charm and comfort with its soft curves and supportive armrests.',
    image:'/dining-chairs/diningchair3.jpg',
    category: "dining",
    productType: "dining-chairs",
  },
  {
    id: 4444,
    title: "Halo Cutout Chair",
    price: "1000",
    image:'/dining-chairs/dainingchair2.jpg',
    description:'A sophisticated silhouette with a unique back cutout, combining soft cream upholstery and bold black legs for a luxe look.',
    category: "dining",
    productType: "dining-chairs",
  },
  {
    id: 5555,
    title: "Verde Velvet Chair",
    price: "1000",
    image:'/dining-chairs/diningchair5.jpg',
    description:'With rich green velvet and a vintage wood base, this chair adds a pop of color and texture to any dining area.',
    category: "dining",
    productType: "dining-chairs",
  },
  {
    id: 6666,
    title: "Cocoa Twin Chairs",
    price: "1000",
    image:'/dining-chairs/dainingchair4.jpg',
    description:'Inspired by mid-century modern design, these cozy cocoa-toned chairs deliver timeless charm with their curved wooden frame.',
    category: "dining",
    productType: "dining-chairs",
  },
],
beds:[
  {
    id: 11111,
    title: "Lunar Shadow Bed",
    price: "1000",
    image:'/beds/bed1.jpg',
    description:'A sleek modern design with a matte black finish and ambient side lighting. Perfect for minimalist interiors seeking a bold, luxurious statement.',
    category: "bedroom",
    productType: "beds",
  },
  {
    id: 22222,
    title: "Cavern Retreat Bed",
    image:'/beds/bed2.jpg',
    price: "1000",
    description:'Crafted to merge with nature, this low-profile bed with a seamless headboard brings organic textures and moody ambiance into your space.',
    category: "bedroom",
    productType: "beds",
  },
  {
    id:33333,
    title: "Cloudline Bed",
    price: "1000",
    description:'Upholstered in a soft taupe with extra cushioning, this bed exudes comfort and elegance with a modern neutral palette and floating base.',
    image:'/beds/bed3.jpg',
    category: "bedroom",
    productType: "beds",
  },
  {
    id: 44444,
    title: "Sierra Woodframe Bed",
    price: "1000",
    image:'/beds/bed4.jpg',
    description:'Inspired by warm wood tones and geometric lines, this structured bed brings natural elegance into contemporary spaces.',
    category: "bedroom",
    productType: "beds",
  },
  {
    id: 55555,
    title: "Ivory Float Bed",
    price: "1000",
    image:'/beds/bed5.jpg',
    description:'This light-toned upholstered bed features an extended headboard and underglow lighting for a clean and elevated bedroom atmosphere.',
    category: "bedroom",
    productType: "beds",
  },
  {
    id: 66666,
    title: "Noir Horizon Bed",
    price: "1000",
    image:'/beds/bed6.jpg',
    description:'Ultra-low and moody, this bed is made for lovers of deep tones and modern brutalist spaces. Its extended platform adds to its striking presence.',
    category: "bedroom",
    productType: "beds",
  },
],
chairs:[
  {
    id: 111111,
    title: " Wassily Chair B3",
    price: "1000",
    image:'/chairs/chair1.jpg',
    description:'A timeless Bauhaus classic by Marcel Breuer, the Wassily Chair features a sleek chrome frame and taut leather straps—blending industrial edge with modern elegance.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 222222,
    title: "Arne Lounge Swivel Chair",
    image:'/chairs/chair2.jpg',
    price: "1000",
    description:'Mid-century comfort meets minimalist form. With its plush cushions, smooth swivel base, and premium leather, this chair invites relaxation and refined design in one piece.',
    category: "living",
    productType: "chairs",
  },
  {
    id:333333,
    title: "MR Lounge Chair",
    price: "1000",
    description:'An icon of modernist luxury. The MR Lounge Chair boasts a tubular steel frame and sumptuous cushioning, creating the perfect balance of architectural clarity and comfort.',
    image:'/chairs/chair3.jpg',
    category: "living",
    productType: "chairs",
  },
  {
    id: 444444,
    title: "Eames Lounge Chair & Ottoman",
    price: "1000",
    image:'/chairs/chair4.jpg',
    description:'An icon of mid-century modern design. The Eames Lounge offers unmatched comfort with its molded wood shell and supple leather cushions — the epitome of luxury and style.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 555555,
    title: "LC4 Chaise Longue",
    price: "1000",
    image:'/chairs/chair5.jpg',
    description:'Engineered for relaxation. The LC4 adapts to your body’s shape, featuring a sleek steel frame and plush upholstery — perfect for timeless lounging with architectural flair.',
    category: "living",
    productType: "chairs",
  },
  {
    id: 666666,
    title: "Siesta Lounge Chair",
    price: "1000",
    image:'/chairs/chair6.jpg',
    description:'Effortless comfort meets Scandinavian design. With its soft leather seat and airy chrome frame, the Siesta Chair is a minimalist statement made for modern interiors.',
    category: "living",
    productType: "chairs",
  },
],
coffeeTables:[
  {
    id: 1111111,
    title: "Noir Curve Table",
    price: "1000",
    image:'/coffee-tables/ctable1.jpg',
    description:'A statement piece with bold curvature and deep black finish, perfect for elevating contemporary interiors.',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id: 2222222,
    title: "Driftwood Stone Table",
    image:'/coffee-tables/ctable2.jpg',
    price: "1000",
    description:'This table blends organic textures with sleek form, offering a grounded, elegant centerpiece for your living room.',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id:3333333,
    title: "Sandstone Harmony Table",
    price: "1000",
    description:'A calming aesthetic and smooth lines make this table ideal for minimalist and earthy decors.',
    image:'/coffee-tables/ctable3.jpg',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id: 4444444,
    title: "Tuscan Round Marble Table",
    price: "1000",
    image:'/coffee-tables/ctable4.jpg',
    description:'Crafted from rich marble, this table brings a rustic-luxury vibe to cozy corners or bold social areas.',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id: 5555555,
    title: "Lucent Chrome Table",
    price: "1000",
    image:'/coffee-tables/ctable5.jpg',
    description:'This clear glass and chrome table brings spaciousness and futuristic style to any contemporary setting.',
    category: "living",
    productType: "coffee-tables",
  },
  {
    id: 6666666,
    title: "Smoke Glass Retro Table",
    price: "1000",
    image:'/coffee-tables/ctable6.jpg',
    description:'Sleek, nostalgic, and versatile—a vintage-inspired piece perfect for lofts and artistic spaces.',
    category: "living",
    productType: "coffee-tables",
  },
],
nightstands:[
  {
    id: 11111111,
    title: "Noir Essence",
    price: "1000",
    image:'/nightstands/nstand1.jpg',
    description:'Dark minimalism with character. This side table brings modern elegance to any corner, perfect for contemporary interiors.',
    category: "bedroom",
    productType: "nightstands"
  },
  {
    id: 22222222,
    title: "Soft Curve",
    image:'/nightstands/nstand2.jpg',
    price: "1000",
    description:'A fluid design with a warm touch. Its smooth silhouette and matte finish make it a versatile piece for both living rooms and bedrooms.',
    category: "bedroom",
    productType: "nightstands"
  },
  {
    id:33333333,
    title: "Rust Arch",
    price: "1000",
    description:'A functional sculpture. The arched form and terracotta finish give this table an artistic edge that commands attention.',
    image:'/nightstands/nstand3.jpg',
    category: "bedroom",
    productType: "nightstands"
  },
  {
    id: 44444444,
    title: "Eclipse",
    price: "1000",
    image:'/nightstands/nstand4.jpg',
    description:'Monochrome sophistication. Ideal for refined spaces, its compact shape fits seamlessly next to your favorite armchair.',
    category: "bedroom",
    productType: "nightstands"
  },
  {
    id: 55555555,
    title: "Zen Natural",
    price: "1000",
    image:'/nightstands/nstand5.jpg',
    description:'A balance of wood and stone. This piece brings tranquility and organic beauty to modern interiors.',
    category: "bedroom",
    productType: "nightstands"
  },
  {
    id: 66666666,
    title: "Dual Harmony",
    price: "1000",
    image:'/nightstands/nstand6.jpg',
    description:'A duo of function and style. This set pairs geometric lines with contrasting textures for a sleek and practical aesthetic.',
    category: "bedroom",
    productType: "nightstands"
  },
],
diningTables:[
  {
    id: 11111111,
    title: "Onyx Clear Dining Table",
    price: "1000",
    image:'/dining-tables/dtable1.jpg',
    description:'A striking contrast of dark wood and transparent legs, this table makes a bold statement while keeping a light visual footprint—perfect for contemporary minimalists.',
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
    title: "Midnight Curve Dining Table",
    price: "1000",
    description:'Sleek and sculptural, this piece pairs dark sophistication with a soft curved silhouette, ideal for elegant dinner settings.',
    image:'/dining-tables/dtable3.jpg',
     category: "dining",
    productType: "dining-tables"
  },
  {
    id: 44444444,
    title: "Luna Walnut Dining Set",
    price: "1000",
    image:'/dining-tables/dtable4.jpg',
    description:'This smooth, rounded design brings together comfort and craftsmanship, blending soft upholstery with a rich walnut finish.',
    category: "dining",
    productType: "dining-tables"
  },
  {
    id: 55555555,
    title: "Obsidian Marble Dining Table",
    price: "1000",
    image:'/dining-tables/dtable5.jpg',
    description:'Clean lines meet dramatic tones in this black-and-white marble design. A luxurious statement for upscale dining experiences.',
    category: "dining",
    productType: "dining-tables"
  },
  {
    id: 66666666,
    title: "Slate Extendable Table",
    price: "1000",
    image:'/dining-tables/dtable6.jpg',
    description:'Designed for versatility, this extendable table offers both functionality and style with its bold base and seamless finish.',
    category: "dining",
    productType: "dining-tables"
  },
],
sideBoards:[
  {
    id: 111111111,
    title: "Aurum Sideboard",
    price: "1000",
    image:'/sideboards/sideboard1.jpg',
    description:'A bold fusion of matte black oak and brushed gold accents. The Aurum brings refined contrast and elegance to modern interiors.',
    category: "dining",
    productType: "sideboards"
  },
  {
    id: 222222222,
    title: "Marquina Luxe",
    image:'/sideboards/sideboard2.jpg',
    price: "1000",
    description:'Crafted with dark marble finishes and warm wood inlays, this statement piece adds depth and luxury to your dining or living space.',
    category: "dining",
    productType: "sideboards"
  },
  {
    id:333333333,
    title: "Linea Noir",
    price: "1000",
    description:'Sleek curves meet artistic minimalism. The Linea Noir offers a refined modern aesthetic with subtle etched textures.',
    image:'/sideboards/sideboard3.jpg',
     category: "dining",
    productType: "sideboards"
  },
  {
    id: 444444444,
    title: "Stonewave Console",
    price: "1000",
    image:'/sideboards/sideboard4.jpg',
    description:'Organic textures meet futuristic form. This curved stone-inspired piece is ideal for minimalist yet impactful decor.',
    category: "dining",
    productType: "sideboards"
  },
  {
    id: 555555555,
    title: "Vetro Display",
    price: "1000",
    image:'/sideboards/sideboard5.jpg',
    description:'With illuminated shelves and clean black framing, this sideboard is perfect for showcasing your finest glassware and design sensibility.',
    category: "dining",
    productType: "sideboards"
  },
  {
    id: 666666666,
    title: "Walnut Atelier",
    price: "1000",
    image:'/sideboards/sideboard6.jpg',
    description:'A sophisticated mix of smoked glass and walnut wood. Elegant lighting accents bring warmth and clarity to this timeless piece.',
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