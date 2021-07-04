"""Update org.desc column to org.description

Revision ID: 85b787906df7
Revises: 92adc9dc7166
Create Date: 2021-06-20 22:53:03.666427

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '85b787906df7'
down_revision = '92adc9dc7166'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('auth_org', sa.Column('description', sa.Text(length=500), nullable=True))
    op.drop_column('auth_org', 'desc')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('auth_org', sa.Column('desc', sa.TEXT(length=500), nullable=True))
    op.drop_column('auth_org', 'description')
    # ### end Alembic commands ###