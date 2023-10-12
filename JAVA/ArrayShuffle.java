import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ArrayShuffle {
    public static void main(String[] args) {
        Integer[] arr = {1, 2, 3, 4, 5, 6, 7};
        List<Integer> list = new ArrayList<>(Arrays.asList(arr));
        Collections.shuffle(list);
        System.out.println(Arrays.toString(list.toArray(arr)));
    }
}
