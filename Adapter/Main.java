public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle(10);
        Square square = new Square(4);

        System.out.println(circle.fits(square.getWidth()));
        System.out.println(square.getWidth());

        SquareCircleAdapter squareCircleAdapter = new SquareCircleAdapter(square);

        System.out.println(squareCircleAdapter.getRadius());
        System.out.println(circle.fits(squareCircleAdapter.getRadius()));
    }
}