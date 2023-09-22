import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {TState, TAppDispatch} from '../types/state';

const useAppDispatch = () => useDispatch<TAppDispatch>();

const useAppSelector: TypedUseSelectorHook<TState> = useSelector;

export {useAppDispatch, useAppSelector};
