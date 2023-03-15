import RenderCards from './RenderCards'

export default function CharDetails({ data }) {
    if (!data.length) {
  
      // throw error
      return (
        <h1>No Data Found</h1>
      )
    }
  
    return (
      data.map(elements => (
        <RenderCards
          key={elements.id}
          image={elements.image}
          name={elements.name}
          gender={elements.gender}
          status={elements.status}
          species={elements.species}
        />
      ))
    )
  }



