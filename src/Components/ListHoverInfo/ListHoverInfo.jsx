import React from 'react'
import './ListHoverInfo.css'
import { BiListPlus, BiReplyAll } from "react-icons/bi";

const ListHoverInfo = () => {
    return (
        <>
            <div className="list_hover_box">
                <div className="hover_box_header">
                    <img src='https://media.licdn.com/dms/image/C4E03AQHuYQzibnq7EQ/profile-displayphoto-shrink_800_800/0/1639738751055?e=2147483647&v=beta&t=CQZ_BFODS2pU_krEJNcLOqlWX0QzudiqPIthCgGguJE' alt="" />
                    <div className="list_user_info">
                        <p><strong>Developer Achem</strong> Submit a New ticket</p>
                        <span>2 days ago (Thu, 23 feb 2022 at 4:32 AM</span>
                    </div>
                </div>
                <div className="list_hover_box_body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dignissimos facere repellat quos modi perferendis fugiat saepe qui. Molestiae nemo vero earum facere, corrupti ducimus tempore natus perferendis deleniti? Rerum commodi asperiores veritatis dolorum quam voluptate repellendus ipsum praesentium earum, harum adipisci suscipit corrupti accusantium, mollitia dolor atque iusto blanditiis!</p>
                </div>
                <div className="list_hover_box_footer">
                    <a href="/"> <BiReplyAll/> Reply</a>
                    <a href="/"><BiListPlus/> Add note</a>
                </div>
            </div>
        </>
    )
}

export default ListHoverInfo