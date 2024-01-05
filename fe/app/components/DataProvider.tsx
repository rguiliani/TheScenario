import { FC, ReactNode, createContext, useState, useEffect } from "react";

const API_BASE_URL = 'http://localhost:3000'
interface IData {_id: string, data?: string}
export interface IDataProvider {
  data?: IData[],
  setData?: unknown,
  publish: (d?: unknown) => unknown,
  setLoadData: (a: boolean) => unknown,
  del: (id: string) => unknown
  update: (id: string, data: unknown) => unknown,
  editing: boolean,
  edit: (id: string) => unknown,
  editVal: string,
  cancelEdit: () => void,
  editId: string
}

export const DataContext = createContext<IDataProvider>({
  data: [],
  setData: () => { },
  publish: () => { },
  setLoadData: () => { },
  del: () => {},
  update: () => {},
  editing: false,
  edit: () => {},
  editVal: '',
  cancelEdit: () => {},
  editId: ''
})

const publish = async (data: unknown) => {
  const result = await fetch(`${API_BASE_URL}/data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return result.json()
}

const revalidatedData = async (): Promise<[]> => {
  const result = await fetch(`${API_BASE_URL}/data`, {
    method: 'GET',
  });
  return result.json();
}

const del = async (id: string) => {
  const result = await fetch(`${API_BASE_URL}/data/${id}`, {
    method: 'DELETE'
  })
  return result.json()
}

const update = async (id: string, data: unknown) => {
  const result = await fetch(`${API_BASE_URL}/data/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<IData[]>();
  const [loadData, setLoadData] = useState<boolean>(true);
  const [editing, setEditing] = useState<boolean>(false)
  const [editVal, setEditVal] = useState<string>('')
  const [editId, setEditId] = useState<string>('')

  useEffect(() => {

    if (!loadData)
      return;

    setLoadData(false)

    revalidatedData()
      .then(res => {
        setData(res)
      })
  })

  const value = {
    data,
    setData,
    publish,
    setLoadData,
    del,
    update,
    editing,
    edit: (id: string) => {
      setEditing(true)
      setEditId(id)
      const val = data?.filter(d => d._id === id)[0].data
      setEditVal(val && val || '')
    },
    editVal,
    setEditVal,
    cancelEdit: () => {
      setEditing(false)
      setEditVal('')
      setEditId('')
    },
    editId
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}