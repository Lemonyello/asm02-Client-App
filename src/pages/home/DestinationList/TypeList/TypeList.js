import TypeListItem from './TypeListItem';

let typeList = [
  {
    name: 'hotel',
    image: './images/type_1.webp',
  },
  {
    name: 'apartment',
    image: './images/type_2.jpg',
  },
  {
    name: 'resort',
    image: './images/type_3.jpg',
  },
  {
    name: 'villa',
    image: './images/type_4.jpg',
  },
  {
    name: 'cabin',
    image: './images/type_5.jpg',
  },
];

// list of type of hotel on home page
const TypeList = ({ className, hotels }) => {
  typeList = typeList.map((t) => {
    t.count = hotels.filter((h) => h.type === t.name).length;
    return t;
  });

  return (
    <div>
      <h3>Browse by property type</h3>

      <div className={className}>
        {typeList.map((type, i) => (
          <TypeListItem
            key={i}
            name={type.name}
            count={type.count}
            image={type.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TypeList;
