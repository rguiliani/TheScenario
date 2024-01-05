import { useContext } from 'react'
import { DataContext } from './DataProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'

export function Row(props: { shade: number, data: {_id: string, data?: string }}) {
  const ctx = useContext(DataContext)
  const { data, shade } = props
  const shadeColor = shade ? 'bg-blue-100 text-slate-600' : 'bg-slate-800'
  return (
    <div className={`grid grid-cols-12 gap-4 ${shadeColor}`}>
      <div className='col-span-8 p-4'>{data.data}</div>
      <div className='col-span-2 p-4'>
        <a href='#' onClick={() => ctx.edit(data._id)}>
          <FontAwesomeIcon icon={faPencil} className="text-blue-500" />
        </a>
      </div>
      <div className='col-span-2 p-4'>
        <a href='#' onClick={() => {
          const { _id } = data
          ctx.del(_id)
          ctx.setLoadData(true)
        }}>
          <FontAwesomeIcon icon={faTrash} className="text-blue-500" />
        </a>
      </div>
    </div>
  )
}
