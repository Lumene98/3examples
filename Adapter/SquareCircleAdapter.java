public class SquareCircleAdapter extends Square {

    final Square square;

    public SquareCircleAdapter(Square square) {
        this.square = square;
    }

    public double getRadius() {
        return  (Math.sqrt(Math.pow((square.getWidth() / 2), 2) * 2));
    }

}
