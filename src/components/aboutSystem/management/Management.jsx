import './management.scss';
import ManagementItem from './ManagementItem/ManagementItem';

export default function Management() {
  return (
    <div className='Management'>
      <div className='ManageTitle'>Руководство для образовательных организаций</div>
      <div className='ManageDesrc'>
          <ManagementItem
            MainTitle={'Заголовок элемента списка'}
            UnderTitle={'ПОДЗАГОЛОВОК ЭЛЕМЕНТА'}
            Desrc={' Это описание элемента. Здесь можно рассказать о товарах, услугах и сотрудниках компании, а также разместить информацию о других темах, к которым необходимо привлечь внимание посетителей'}
          />
          <ManagementItem
            MainTitle={'Заголовок элемента списка'}
            UnderTitle={'ПОДЗАГОЛОВОК ЭЛЕМЕНТА'}
            Desrc={' Это описание элемента. Здесь можно рассказать о товарах, услугах и сотрудниках компании, а также разместить информацию о других темах, к которым необходимо привлечь внимание посетителей'}
          />
          <ManagementItem
            MainTitle={'Заголовок элемента списка'}
            UnderTitle={'ПОДЗАГОЛОВОК ЭЛЕМЕНТА'}
            Desrc={' Это описание элемента. Здесь можно рассказать о товарах, услугах и сотрудниках компании, а также разместить информацию о других темах, к которым необходимо привлечь внимание посетителей'}
          />
        </div>
    </div>
  )
}