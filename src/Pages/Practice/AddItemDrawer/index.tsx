import { Drawer } from "antd";

type AddItemDrawerProps = {
    setOpenAddItemDrawer: React.Dispatch<React.SetStateAction<boolean>>;
    openAddItemDrawer: boolean; 

}
const AddItemDrawer = ({setOpenAddItemDrawer, openAddItemDrawer}: AddItemDrawerProps) => {

  const onClose = () => {
    setOpenAddItemDrawer(false);
  };
    return (
        <div>
            <Drawer
                title="Basic Drawer"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={openAddItemDrawer}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    );
};

export default AddItemDrawer;