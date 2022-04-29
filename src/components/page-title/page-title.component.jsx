import './page-title.styles.scss'

const PageTitle = ({title}) => {
  return (
    <div className="page-title-container">
      <div className="separator" />
      <h2>{title}</h2>
      <div className="separator" />
    </div>
  )
};

export default PageTitle;
