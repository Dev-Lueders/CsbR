import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

// Action to toggle the lock status
const toggleLock = () => ({
  type: 'TOGGLE_LOCK',
});

const Lock = () => {
  const dispatch = useDispatch();
  const isLocked = useSelector((state) => state.lock.isLocked);

  const handleLockToggle = () => {
    dispatch(toggleLock());
  };

  return (
    <Button
      variant={isLocked ? 'danger' : 'success'}
      onClick={handleLockToggle}
    >
      {isLocked ? 'Unlock' : 'Lock'}
    </Button>
  );
};

export default Lock;