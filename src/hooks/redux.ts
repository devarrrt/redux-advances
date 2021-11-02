import { AppDispatch, RootState } from './../redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppdispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector