import CityListItem from './CityListItem';

const cityList = [
  {
    name: 'Ha Noi',
    subText: '',
    image: './City Image/Ha Noi.jpg',
  },
  {
    name: 'Ho Chi Minh',
    subText: '',
    image: './City Image/HCM.jpg',
  },
  {
    name: 'Da Nang',
    subText: '',
    image: './City Image/Da Nang.jpg',
  },
];

// list of city in home page
const CityList = ({ className, hotels }) => {
  const numHNCities = hotels.filter((h) => h.city === 'Ha Noi').length;

  const numHCMCities = hotels.filter((h) => h.city === 'Ho Chi Minh').length;

  const numDNCities = hotels.filter((h) => h.city === 'Da Nang').length;

  cityList[0].subText = numHNCities;
  cityList[1].subText = numHCMCities;
  cityList[2].subText = numDNCities;

  return (
    <div className={className}>
      {cityList.map((city, i) => (
        <CityListItem
          key={i}
          name={city.name}
          subText={city.subText + ' properties'}
          image={city.image}
        />
      ))}
    </div>
  );
};

export default CityList;
