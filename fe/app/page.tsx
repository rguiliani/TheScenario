"use client";

import { useContext } from "react"
import { Formik, Field, Form } from "formik"
import { Table } from "./components/Table";
import { DataContext, DataProvider } from "./components/DataProvider";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageContent = () => {
  const ctx = useContext(DataContext)
  const { data, setLoadData, editing, editVal, editId } = ctx
  const bgWithEdit = editing ? 'bg-yellow-700 dark:bg-yellow-700' : 'bg-white dark:bg-slate-700'
  const titleWithEdit = editing ? 'Edit Data' : 'Input Data'
  const handleClose = () => ctx.cancelEdit()
  const cancelHandle = editing && (
    <FontAwesomeIcon
      icon={faXmark}
      className="absolute right-3 top-3 cursor-pointer text-xl text-gray-600 hover:text-gray-800"
      onClick={handleClose}
    />
  )

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className='w-[75%]'>
        <h2>Data</h2>
        <Table data={data}></Table>
      </div>

      <div className='mt-6'>
        <Formik
          initialValues={{
            data: editVal
          }}
          onSubmit={async (values, { resetForm }) => {
            await new Promise((r) => setTimeout(r, 500));
            if (editing) {
              await ctx.update(editId, values)
              ctx.cancelEdit()
            } else {
              await ctx.publish(values)
            }
            resetForm()
            setLoadData(true)
          }}
          enableReinitialize={true}
        >
          <Form className={`${bgWithEdit} shadow-md rounded px-8 pt-6 pb-8 mb-4 relative`}>
            {cancelHandle}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="firstName">
                {titleWithEdit}
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="data" name="data" placeholder="data" />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>

          </Form>
        </Formik>
      </div>
    </main>
  )
}

export default () => {
  return (
    <DataProvider>
      <PageContent />
    </DataProvider>
  )
}
