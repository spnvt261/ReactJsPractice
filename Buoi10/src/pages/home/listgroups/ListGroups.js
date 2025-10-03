import { Link } from 'react-router-dom'
import './ListGroups.scss'

//import { listGroups } from '../../data/data'

import { MdEdit } from 'react-icons/md'

import { MdOutlineDeleteForever } from 'react-icons/md'

import { MdAddToPhotos } from 'react-icons/md'

import { MdOutlineClose } from 'react-icons/md'

import { MdSearch } from 'react-icons/md'

import FormGroupInfo from './FromGroupInfo'

import { useEffect, useState } from 'react'

import  DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

import ReactPaginate from 'react-paginate'


const ListGroups = (props) => {
    const [groupItem, setGroupItem] = useState({})

    const [buttonText, setButtonText] = useState('Create')

    const [selectChanged, setSelectChanged] = useState(false)

    const [type, setType] = useState('Type')

    const [startDate, setStartDate] = useState(null)

    const [endDate, setEndtDate] = useState(null)


    const handleClickAddGroup = () => {
        setGroupItem({
            name: '',
            type: '',
            createdAt: '',
            totalMember: ''
        })
        setButtonText('Create')

    }

    const handleClickEdit = (item) => {
        setButtonText('Save')
       
    }

    const handleClickIconClose = () => {
        setType('Type')
        setSelectChanged(false)
    }

    const onSelectChange = (e) => {
        setType(e.target.value)
        setSelectChanged(true)
    }

    const handleStartDateChange = (date) => {
        setStartDate(date)
    }

    const handleEndDateChange = (date) => {
        setEndtDate(date)
    }


    const _clickSerch = () => {
        
    }
    console.log('List group rerender...')

    return(
        <div className="list-groups">
            <div className='content'>
                {   
                    props.formGroupIsOpen && <FormGroupInfo groupItem={groupItem} buttonText={buttonText}/>
                }
                <div className='filter-form'>
                    <div className='type-filter'>
                        <select 
                            className='form-control-filter' 
                            value={type} 
                            onChange={onSelectChange}
                        >
                            <option value="Type" hidden>Type</option>
                            <option value="BACKEND">BACKEND</option>
                            <option value="FRONTEND">FRONTEND</option>
                            <option value="FULLSTACK">FULLSTACK</option>
                        </select>
                        
                        {   
                            selectChanged && <MdOutlineClose onClick={handleClickIconClose} className='icon-close'/>
                        }
                    </div>
                    <DatePicker
                        className='form-control-filter'
                        selected={ startDate }
                        onChange={ handleStartDateChange }
                        name="startDate"
                        dateFormat="dd/MM/yyyy"
                        placeholderText='Start Date'
                    />
                    <DatePicker
                        className='form-control-filter'
                        selected={ endDate }
                        onChange={ handleEndDateChange }
                        name="endtDate"
                        dateFormat="dd/MM/yyyy"
                        placeholderText='End Date'
                    />
                    <div className='icon-serach'>
                        <MdSearch onClick={_clickSerch} fontSize="1.2rem"/>
                    </div>
                </div>
                <div className='icon-add'>
                    <MdAddToPhotos fontSize="1.2rem" style={{cursor: 'pointer'}}
                        onClick={handleClickAddGroup}
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Created Date</th>
                            <th>Total Member</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.listGroups && props.listGroups.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.type}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.totalMember}</td>
                                        <td>
                                            <MdEdit fontSize="1.2rem"
                                                style={{marginRight: '10px', cursor: 'pointer'}}
                                                onClick={() => handleClickEdit(item)}
                                            />
                                            <MdOutlineDeleteForever fontSize="1.2rem"
                                                style={{marginLeft: '10px', cursor: 'pointer'}}
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {/* <div className='paging'>
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div> */}
            </div>
        </div>
    )
}

export default ListGroups