import React from 'react'
import './ListPageSidebar.css'

const ListFilterSidebar = () => {
    return (
        <>
            <div className="list_sidebar_component">
                <form action="#">
                    <h5>Filters</h5>
                    <label htmlFor="#">
                        Agents
                        <select name="" id="">
                            <option value="">Any Agent</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                        Groups
                        <select name="" id="">
                            <option value="">Any Group</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                        Created
                        <select name="" id="">
                            <option value="">Any Time</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                        Closed
                        <select name="" id="">
                            <option value="">Any Time</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                        Resolved
                        <select name="" id="">
                            <option value="">Any Time</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                        Resolution due by
                        <select name="" id="">
                            <option value="">Any Time</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                        First response due by 
                        <select name="" id="">
                            <option value="">Any Time</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                        Next response due by 
                        <select name="" id="">
                            <option value="">Any Time</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                        Skill
                        <select name="" id="">
                            <option value="">Any</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                        Status
                        <select name="" id="">
                            <option value="">Any</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                    Priority
                        <select name="" id="">
                            <option value="">Any</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                    Priority
                        <select name="" id="">
                            <option value="">Any</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                    Priority
                        <select name="" id="">
                            <option value="">Any</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                    Priority
                        <select name="" id="">
                            <option value="">Any</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                    Priority
                        <select name="" id="">
                            <option value="">Any</option>
                        </select>
                    </label>
                    <label htmlFor="#">
                    Priority
                        <select name="" id="">
                            <option value="">Any</option>
                        </select>
                    </label>
                    <button type='submit'>Apply</button>
                </form>
            </div>
        </>
    )
}

export default ListFilterSidebar