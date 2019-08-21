import { useEffect } from 'react';
import  { setUser } from '@actions/Auth';

const useSetUser = ({ dispatch }) => {
  useEffect(() => {
    dispatch(setUser());
  }, []);
};

export default useSetUser;