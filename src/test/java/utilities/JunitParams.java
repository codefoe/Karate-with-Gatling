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
    }
}
