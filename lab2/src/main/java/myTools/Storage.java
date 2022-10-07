package myTools;

import myBeanComponent.Data;

import java.util.LinkedList;

public class Storage {
    private LinkedList<Data> list;

    public Storage(){
        list = new LinkedList<>();
    }

    public void add(Data data){
        list.add(data);
    }

    public void clear(){
        list.clear();
    }

    public int size(){
        return list.size();
    }

    public Data get(int i){
        return list.get(i);
    }

    public boolean isEmpty(){
        return list.isEmpty();
    }

    public void setList(LinkedList<Data> list){
        this.list = list;
    }

    public LinkedList<Data> getList(){
        return list;
    }

}
