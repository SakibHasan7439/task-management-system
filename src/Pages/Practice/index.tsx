import { Button, Flex } from "antd";
import { useState } from "react";
import AddItemDrawer from "./AddItemDrawer";

const Practice = () => {
    const [openAddItemDrawer, setOpenAddItemDrawer] = useState(false);
    return (
        <div>
            <p>This is our practice page</p>
            <Flex align="center" justify="center">
                <Button 
                    onClick={()=>setOpenAddItemDrawer(true)}
                    type="primary">Open Add Drawer</Button>
            </Flex>
            <AddItemDrawer 
                setOpenAddItemDrawer={setOpenAddItemDrawer}
                openAddItemDrawer={openAddItemDrawer}
            />
        </div>
    );
};

export default Practice;