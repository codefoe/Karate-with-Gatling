package utilities;


import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

public class JunitParams {

    @ParameterizedTest
    @MethodSource
    public void whenWithNamedMethod_thenSafeAdd(int a, int b, int c, int d)  {
        System.out.println(a+ "" + b + " " + c + " " + d);
    }

    private Object[] parametersToTestAdd() {
        return new Object[]{new Object[]{1, 2, 3, 4},
                new Object[]{2,3,4,5}
        };
//        List a = new ArrayList();
//        Map b = new HashMap();
//        b.put("name","ernest");
//        b.put("lastname","kozhokmatov");
//        b.put("phoneNumber","34342");
//        a.add(b);
//        b = new HashMap(b);
//        b.put("fiance","Akbermet");
//        a.add(b);
//        return a;
    }
}
