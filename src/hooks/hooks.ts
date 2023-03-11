import { useSelector } from 'react-redux/es/exports';
import { useDispatch, TypedUseSelectorHook } from 'react-redux/es/exports';
import { AppDispatch, RootState } from './../redux/index';


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector