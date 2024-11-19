import {useSelector} from 'react-redux'

export default function MainContentTwo() {

  const { isLoading, screenData } = useSelector((state) => state.strategy);

  const { MainContentTwo } = screenData.MainContent || {};

  return (
    <div className="MainContentTwo content">
      <div className="MainContentTwo_Container">
        <p>
          {MainContentTwo?.paragraph_1}
        </p>
        <p>
          {MainContentTwo?.paragraph_2}
        </p>
        <p>
          {MainContentTwo?.paragraph_3}
        </p>
        <p>
        {MainContentTwo?.paragraph_4}
        </p>
        <p>{MainContentTwo?.paragraph_5}</p>
      </div>
    </div>
  );
}
